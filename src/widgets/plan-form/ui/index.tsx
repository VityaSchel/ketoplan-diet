import { PlanForm } from '@/features/plan-form/ui/plan-form'
import { planFormValues } from '@/features/plan-form/model/values'
import { planValidationSchema } from '@/features/plan-form/model/schema'
import { KetoPlanResume } from '@/widgets/plan-result/model/ketoplan-resume'
import { Formik } from 'formik'
import { ValidationError } from 'yup'

export function PlanFormContainer({ 
  onSubmit 
}: { onSubmit: (results: KetoPlanResume) => any }) {
  return (
    <>
      {/* FOR DEVELOPMENT */}
      <button style={{ zIndex: 100, position: 'absolute' }} onClick={() => {
        onSubmit({
          imt: 20.29,
          mAge: 37,
          recommendedKcal: { min: 1300, max: 1400 },
          recommendedWater: 1.8,
          achievableWeightIn28Days: 55
        })
      }}>Skip</button>
      {/* FOR DEVELOPMENT */}
      <Formik
        initialValues={planFormValues}
        validate={async (values) => {
          try {
            await planValidationSchema.validate(values, { strict: true, abortEarly: false })
            return {}
          } catch(e) {
            if(e instanceof ValidationError) {
              const errors = Object.fromEntries(e.inner.map(err => [err.path, err.message]))
              return errors
            } else {
              throw e
            }
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            onSubmit({
              imt: 20.29,
              mAge: 37,
              recommendedKcal: { min: 1300, max: 1400 },
              recommendedWater: 1.8,
              achievableWeightIn28Days: 55
            })
            setSubmitting(false);
          }, 400);
        }}
      >
        {props => <PlanForm formik={props as any} />}
      </Formik>
    </>
  )
}