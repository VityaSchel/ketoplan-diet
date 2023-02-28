import React from 'react'
import { FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'
import Screen1, { ValidationSchema as Screen1Validation } from '../PlanFormScreen/Screen1'
import Screen2, { ValidationSchema as Screen2Validation } from '../PlanFormScreen/Screen2'

export const planValidationSchema = 
  Yup.object({
    ...Screen1Validation,
    ...Screen2Validation,
  })


export type PlanFormValues = {
  gender: 'MALE' | 'FEMALE' | null
  activityInterval:
    'MINIMAL' |
    'FREQUENT_WALKS' |
    'EXERCISE_ONCE_PER_WEEK' |
    'EXERCISE_EVERY_OTHER_DAY' |
    'EXERCISE_EVERYDAY' | null
  proteinSources: ('CHICKEN' | 'PORK' | 'BEEF' | 'TURKEY' | 'NO_MEAT' | 'FIST' | 'SEAFOOD')[]
  vegetables: ('BROCCOLI' | 'MUSHROOMS' | 'ZUCCHINI' | 'CAULIFLOWER' | 'AVOCADO' | 'ASPARAGUS' | 'BELL PEPPER' | 'EGGPLANT')[]
  otherFood: ('EGGS' | 'NUTS' | 'CHEESE' | 'COTTAGE CHEESE' | 'BUTTER' | 'COCONUT')[]
  dayType: 'OFFICE_WORK' | 'OFFICE_FREELY' | 'ON_FEET' | 'MANUAL_LABOR' | 'HOME' | null
  badHabits: ('LACK_OF_SLEEP' | 'NIGHT_FOOD' | 'SALT_OVERCONSUMPTION' | 'SUGAR_OVERCONSUMPTION' | 'SODA_OVERCONSUMPTION')[]
  age: number | null
  height: number | null
  currentWeight: number | null
  targetWeight: number | null
}

export default function PlanForm(props: { formik: FormikProps<PlanFormValues> }) {
  const [screen, setScreen] = React.useState<number>(0)

  return (
    <form>
      {[
        <Screen1 key={1} onContinue={() => setScreen(1)}/>,
        <Screen2 key={2} onContinue={() => setScreen(2)} onGoBack={() => setScreen(0)} />,
        // <Screen3 key={2} onContinue={() => setScreen(3)} onGoBack={() => setScreen(1)} />,
      ][screen]}
    </form>
  )
}