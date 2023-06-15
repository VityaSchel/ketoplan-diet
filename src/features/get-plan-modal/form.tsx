import styles from './styles.module.scss'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@/shared/ui/button'
import Input from '@/shared/ui/input'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { fetchAPI } from '@/shared/api'
import { PayWidgetCloudpaymentsResponse, PaymentRequired, SendPlanMailBody } from '@/shared/api/ApiDefinitions'

export default function EmailDialogForm(props: { onSuccess: () => any }) {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={
        Yup.object({
          email: Yup.string()
            .email('Введите почту')
            .required('Введите почту')
        })
      }
      validateOnChange={false}
      onSubmit={(values) => {
        eval(process.env.NEXT_PUBLIC_YANDEX_METRICA_GOAL_PAY ?? '')
        return new Promise<void>(async resolve => {
          const email = await fetchAPI<PaymentRequired>('/send_plan_mail', 'POST', {
            email: values.email
          } satisfies SendPlanMailBody)

          const paymentId = email.response.paymentId

          // @ts-expect-error idk how to fix this
          await fetchAPI<PayWidgetCloudpaymentsResponse>(
            `/payments/${paymentId}/set-email`, 'POST', { email: values.email }, {}, { parseBody: false })
          const request = await fetchAPI<PayWidgetCloudpaymentsResponse>(`/payments/${paymentId}/cloudpayments/widget/pay`, 'GET')
          // @ts-expect-error CP does not have types
          const widget = new cp.CloudPayments()
          widget.pay('charge',
            request.response.cloudpayments,
            {
              onSuccess: () => {
                props.onSuccess()
                resolve()
              },
              onFail: () => { resolve() }
            }
          )
        })
      }}
    >
      {({
        handleSubmit,
        handleChange,
        isSubmitting,
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
          <Button disabled={isSubmitting} onClick={() => handleSubmit()}>Отправить</Button>
        </>
      )}
    </Formik>
  )
}