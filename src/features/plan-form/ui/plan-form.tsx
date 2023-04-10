import React from 'react'
import { FormikProps, useFormik } from 'formik'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import Screen4 from './screens/Screen4'
import Screen5 from './screens/Screen5'
import Screen6 from './screens/Screen6'
import Screen7 from './screens/Screen7'
import Screen8 from './screens/Screen8'
import { PlanFormValues } from '../model/values'

export function PlanForm(props: { formik: FormikProps<PlanFormValues> }) {
  const [screen, setScreen] = React.useState<number>(0)

  return (
    <form>
      {[
        <Screen1 key={1} onContinue={() => setScreen(1)} />,
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