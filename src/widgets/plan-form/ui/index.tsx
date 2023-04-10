// import PlanFormBody
// , { PlanFormValues, planValidationSchema } from '@/ui/fragments/Plan/PlanForm'
import { planFormValues } from '../model/values'
import { KetoPlanResume } from '@/widgets/plan-result/ui/plan-result-body'
import { Formik } from 'formik'

export function PlanForm({ 
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