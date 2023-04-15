import React from 'react'
import Checkout, { CheckoutProps, CheckoutRefProperties } from '@x5io/checkout'
import { PayCloudpaymentsResponse } from '@/shared/api/ApiDefinitions'
import { fetchAPI } from '@/shared/api'
import { makeRedirect } from '@/shared/utils'

export type PaymentRefMethods = {
  open: (paymentID: string, email: string, subject: CheckoutProps['subject']) => any
}

const Payment = React.forwardRef((props, ref) => {
  const [subject, setSubject] = React.useState<null | CheckoutProps['subject']>(null)
  const [paymentID, setPaymentID] = React.useState<string>('')
  const [email, setEmail] = React.useState('')
  const checkoutRef = React.useRef<CheckoutRefProperties>()

  React.useImperativeHandle(ref, () => ({
    open(paymentID: string, email: string, subject: CheckoutProps['subject']) {
      setEmail(email)
      setPaymentID(paymentID)
      setSubject(subject)
      if(checkoutRef) initializeCheckout()
    } 
  }))

  const handleRequest = async (cryptogram: string) => {
    const pay = await fetchAPI<PayCloudpaymentsResponse>(`/payments/${paymentID}/cloudpayments/pay`, 'POST', {
      cryptogram
    })
    if(pay.request.status === 201) {
      makeRedirect(
        pay.response.redirectUrl, 
        pay.response.redirectParams ? Object.fromEntries(pay.response.redirectParams.map(({ key, value }) => [key, value])) : {},
        pay.response.redirectMethod
      )
      // TODO: do not remove!
      // const payment3ds = window.open('3ds', '3ds', 'width=300,height=600')
      // if(!payment3ds) return false
      // payment3ds.addEventListener('message', event => {
      //   if(
      //     typeof event.data === 'object' 
      //     && Object.hasOwn(event.data, 'type')
      //     && event.data.type === 'payment_completed' 
      //     && Object.hasOwn(event.data, 'payment_status')
      //   ) {
      //     return event.data.payment_status === 'success'
      //   }
      // })
      return true
    } else {
      console.error('Expected 201 http status code')
      return false
    }
  }

  React.useEffect(() => initializeCheckout(), [email, checkoutRef])

  const initializeCheckout = () => {
    if(checkoutRef?.current && email) {
      checkoutRef.current.initialize({ email })
    }
  }

  return (<>
    {subject && <Checkout
      ref={checkoutRef}
      subject={subject}
      onRequest={handleRequest}
    />}
  </>)
})
Payment.displayName = 'Payment'
export { Payment }