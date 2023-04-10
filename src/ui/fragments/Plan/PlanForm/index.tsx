import React from 'react'
import { FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'
import Screen1, { ValidationSchema as Screen1Validation } from '../PlanFormScreen/Screen1'
import Screen2, { ValidationSchema as Screen2Validation } from '../PlanFormScreen/Screen2'
import Screen3, { ValidationSchema as Screen3Validation } from '../PlanFormScreen/Screen3'
import Screen4, { ValidationSchema as Screen4Validation } from '../PlanFormScreen/Screen4'
import Screen5, { ValidationSchema as Screen5Validation } from '../PlanFormScreen/Screen5'
import Screen6, { ValidationSchema as Screen6Validation } from '../PlanFormScreen/Screen6'
import Screen7, { ValidationSchema as Screen7Validation } from '../PlanFormScreen/Screen7'
import Screen8, { ValidationSchema as Screen8Validation } from '../PlanFormScreen/Screen8'

export const planValidationSchema = 
  Yup.object({
    ...Screen1Validation,
    ...Screen2Validation,
    ...Screen3Validation,
    ...Screen4Validation,
    ...Screen5Validation,
    ...Screen6Validation,
    ...Screen7Validation,
    ...Screen8Validation,
  })

export default function PlanForm(props: { formik: FormikProps<PlanFormValues> }) {
  const [screen, setScreen] = React.useState<number>(0)

  return (
    <form>
      {[
        <Screen1 key={1} onContinue={() => setScreen(1)}/>,
        <Screen2 key={2} onContinue={() => setScreen(2)} onGoBack={() => setScreen(0)} />,
        <Screen3 key={3} onContinue={() => setScreen(3)} onGoBack={() => setScreen(1)} />,
        <Screen4 key={4} onContinue={() => setScreen(4)} onGoBack={() => setScreen(2)} />,
        <Screen5 key={5} onContinue={() => setScreen(5)} onGoBack={() => setScreen(3)} />,
        <Screen6 key={6} onContinue={() => setScreen(6)} onGoBack={() => setScreen(4)} />,
        <Screen7 key={6} onContinue={() => setScreen(7)} onGoBack={() => setScreen(5)} />,
        <Screen8 key={7} onContinue={props.formik.handleSubmit} onGoBack={() => setScreen(6)} />,
      ][screen]}
    </form>
  )
}