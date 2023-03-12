import styles from './styles.module.scss'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@/ui/components/Button'
import Input from '@/ui/components/Input'
import { Formik } from 'formik'
import * as Yup from 'yup'

export default function EmailDialogForm(props: { onSubmit: () => any }) {
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
      onSubmit={(values, { setSubmitting }) => {
        // TODO: add logic here
        props.onSubmit()
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