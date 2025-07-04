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
// import { useRouter } from 'next/router'

export function PlanForm(props: { formik: FormikProps<PlanFormValues> }) {
  const [screen, setScreen] = React.useState<number>(0)
  // const router = useRouter()

  const handleGo = (nextScreen: number) => () => {
    setScreen(nextScreen)
    window.scrollTo(0, 0)
  }

  // Could not prefetch next screen because they're on the same page
  // React.useEffect(() => {
  //   router.prefetch()
  // }, [screen])

  return (
    <form>
      {[
        <Screen1 key={1} onContinue={handleGo(1)} />,
        <Screen2 key={2} onContinue={handleGo(2)} onGoBack={handleGo(0)} />,
        <Screen3 key={3} onContinue={handleGo(3)} onGoBack={handleGo(1)} />,
        <Screen4 key={4} onContinue={handleGo(4)} onGoBack={handleGo(2)} />,
        <Screen5 key={5} onContinue={handleGo(5)} onGoBack={handleGo(3)} />,
        <Screen6 key={6} onContinue={handleGo(6)} onGoBack={handleGo(4)} />,
        <Screen7 key={6} onContinue={handleGo(7)} onGoBack={handleGo(5)} />,
        <Screen8 key={7} onContinue={props.formik.handleSubmit} onGoBack={() => setScreen(6)} />,
      ][screen]}
    </form>
  )
}