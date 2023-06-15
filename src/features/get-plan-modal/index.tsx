import React from 'react'
import styles from './styles.module.scss'
import Button from '@/shared/ui/button'
import Dialog from '@mui/material/Dialog'
import EmailDialogForm from './form'
import EmailDialogResult from './result'
import { MdClose } from 'react-icons/md'
import Script from 'next/script'

export default function GetPlanModal(props: { children: React.ReactNode }) {
  const [dialogVisible, setDialogVisible] = React.useState(false)

  const handleOpenDialog = () => {
    setDialogVisible(true)
    eval(process.env.NEXT_PUBLIC_YANDEX_METRICA_GOAL_PAY_BEFORE_CHECKBOXES ?? '')
  }

  return (
    <>
      <Button ellipsed onClick={handleOpenDialog}>{props.children}</Button>
      <EmailDialog open={dialogVisible} onClose={() => setDialogVisible(false)} />
    </>
  )
}

export function EmailDialog(props: { open: boolean, onClose: () => any }) {
  const [screen, setScreen] = React.useState<'form' | 'result'>('form')

  React.useEffect(() => {
    if(!props.open) {
      setScreen('form')
    }
  }, [props.open])

  return (
    <>
      <Dialog open={props.open} onClose={props.onClose} className={styles.dialog}>
        {screen === 'form'
          ? <EmailDialogForm onSuccess={() => setScreen('result')} />
          : <EmailDialogResult onClose={props.onClose} />
        }
        <button className={styles.closeButton} onClick={props.onClose}>
          <MdClose />
        </button>
        <Script src="https://widget.cloudpayments.ru/bundles/cloudpayments.js" />
      </Dialog>
    </>
  )
}