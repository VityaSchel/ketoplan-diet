import React from 'react'
import styles from './styles.module.scss'
import Button from '@/ui/components/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Input from '@/ui/components/Input'

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
  const handleSubscribe = () => {
    props.onClose()
  }

  return (
    <Dialog open={props.open} onClose={props.onClose} className={styles.dialog}>
      <DialogTitle className={styles.title}>Получите план на электронную почту</DialogTitle>
      <DialogContent className={styles.content}>
        <DialogContentText className={styles.description}>
          Укажите e-mail, куда мы отправим ваш персональный план диеты
        </DialogContentText>
        <Input 
          label='E-mail'
          placeholder='Адрес электронной почты'
        />
      </DialogContent>
      <Button onClick={handleSubscribe}>Отправить</Button>
    </Dialog>
  )
}