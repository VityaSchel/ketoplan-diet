import React from 'react'
import styles from './styles.module.scss'
import Button from '@/ui/components/Button'
import Dialog from '@mui/material/Dialog'
import EmailDialogForm from './Form'
import EmailDialogResult from './Result'
import { MdClose } from 'react-icons/md'

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

  React.useEffect(() => {
    if(!props.open) {
      setScreen('form')
    }
  }, [props.open])

  return (
    <>
      <Dialog open={props.open} onClose={props.onClose} className={styles.dialog}>
        {screen === 'form'
          ? <EmailDialogForm onSubmit={() => setScreen('result')} />
          : <EmailDialogResult onClose={props.onClose} />
        }
        <button className={styles.closeButton} onClick={props.onClose}>
          <MdClose />
        </button>
      </Dialog>
    </>
  )
}