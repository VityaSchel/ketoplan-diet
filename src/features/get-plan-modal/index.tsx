import React from 'react'
import styles from './styles.module.scss'
import Button from '@/shared/ui/button'
import Dialog from '@mui/material/Dialog'
import EmailDialogForm from './form'
import EmailDialogResult from './result'
import { MdClose } from 'react-icons/md'
import { Payment, PaymentRefMethods } from '@/features/get-plan-modal/payment'
import { CloudpaymentsPaymentResponse } from '@/shared/api/ApiDefinitions'
import { fetchAPI } from '@/shared/api'

export default function GetPlanModal(props: { children: React.ReactNode }) {
  const [dialogVisible, setDialogVisible] = React.useState(false)

  return (
    <>
      <Button ellipsed onClick={() => setDialogVisible(true)}>{props.children}</Button>
      <EmailDialog open={dialogVisible} onClose={() => setDialogVisible(false)} />
    </>
  )
}

function EmailDialog(props: { open: boolean, onClose: () => any }) {
  const [screen, setScreen] = React.useState<'form' | 'result'>('form')
  const paymentRef = React.useRef<PaymentRefMethods>()

  React.useEffect(() => {
    if(!props.open) {
      setScreen('form')
    }
  }, [props.open])

  const handlePayment = async (paymentId: string) => {
    if(!paymentRef.current) throw new Error('Payment ref is undefined')
    const subject = await fetchAPI<CloudpaymentsPaymentResponse>(`/payments/${paymentId}/cloudpayments`, 'GET')
    paymentRef.current.open(paymentId, { publicID: subject.response.cloudpaymentsPublicId, name: 'Кетоплановая диета', price: subject.response.amount })
    // TODO: after 3ds, setScreen('result')
  }

  return (
    <>
      <Dialog open={props.open} onClose={props.onClose} className={styles.dialog}>
        {screen === 'form'
          ? (<>
            <EmailDialogForm onSubmit={handlePayment} />
            <Payment ref={paymentRef} />
          </>)
          : <EmailDialogResult onClose={props.onClose} />
        }
        <button className={styles.closeButton} onClick={props.onClose}>
          <MdClose />
        </button>
      </Dialog>
    </>
  )
}