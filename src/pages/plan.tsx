import PlanForm, { PlanFormValues, planValidationSchema } from '@/ui/fragments/Plan/PlanForm'
import { Formik } from 'formik'

export default function PlanPage() {
  return (
    <Formik
      initialValues={{ 
        gender: null,
        activityInterval: null,
        proteinSources: [],
        vegetables: [],
        otherFood: [],
        dayType: null,
        badHabits: [],
        age: null,
        height: null,
        currentWeight: null,
        targetWeight: null
      } satisfies PlanFormValues}
      validationSchema={planValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {props => <PlanForm formik={props} />}
    </Formik>
  )
}