import { Formik } from 'formik'

export type PlanFormValues = {
  gender: 'MALE' | 'FEMALE'
  activityInterval:
    'MINIMAL' |
    'FREQUENT_WALKS' |
    'EXERCISE_ONCE_PER_WEEK' |
    'EXERCISE_EVERY_OTHER_DAY' |
    'EXERCISE_EVERYDAY'
  proteinSources: ('CHICKEN' | 'PORK' | 'BEEF' | 'TURKEY' | 'NO_MEAT' | 'FIST' | 'SEAFOOD')[]
  vegetables: ('BROCCOLI' | 'MUSHROOMS' | 'ZUCCHINI' | 'CAULIFLOWER' | 'AVOCADO' | 'ASPARAGUS' | 'BELL PEPPER' | 'EGGPLANT')[]
  otherFood: ('EGGS' | 'NUTS' | 'CHEESE' | 'COTTAGE CHEESE' | 'BUTTER' | 'COCONUT')[]
  dayType: ('OFFICE_WORK' | 'OFFICE_FREELY' | 'ON_FEET' | 'MANUAL_LABOR' | 'HOME')[]
  badHabits: ('LACK_OF_SLEEP' | 'NIGHT_FOOD' | 'SALT_OVERCONSUMPTION' | 'SUGAR_OVERCONSUMPTION' | 'SODA_OVERCONSUMPTION')[]
  age: number
  height: number
  currentWeight: number
  targetWeight: number
}

export default function PlanPage() {
  return (
    <Formik
      initialValues={{ 

      } satisfies PlanFormValues}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {props => <PlanForm {...props} />}
    </Formik>
  )
}