import styles from './styles.module.scss'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { fetchAPI } from '@/shared/api'
import { PaymentRequired, SendPlanMailBody } from '@/shared/api/ApiDefinitions'

export default function EmailDialogForm(props: { onSubmit: (paymentId: string, email: string) => any }) {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={
        Yup.object({
          email: Yup.string()
            .email()
            .required()
        })
      }
      validateOnChange={false}
      onSubmit={async (values) => {
        const email = await fetchAPI<PaymentRequired>('/send_plan_mail', 'POST', {
          email: values.email
        } satisfies SendPlanMailBody)
        props.onSubmit(email.response.paymentId, values.email)
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values, errors
      }) => (
        <>
          <DialogTitle className={styles.title}>Получите план на электронную почту</DialogTitle>
          <DialogContent className={styles.content}>
            <DialogContentText className={styles.description}>
              Укажите e-mail, куда мы отправим ваш персональный план диеты
            </DialogContentText>
            <Input
              name='email'
              label='E-mail'
              placeholder='Адрес электронной почты'
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              onEnter={() => handleSubmit()}
            />
          </DialogContent>
          <Button onClick={() => handleSubmit()}>Отправить</Button>
        </>
      )}
    </Formik>
  )
}