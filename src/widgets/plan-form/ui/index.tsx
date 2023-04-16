import { PlanForm } from '@/features/plan-form/ui/plan-form'
import { PlanFormValues, PlanFormValuesValidated, planFormValues } from '@/features/plan-form/model/values'
import { planValidationSchema } from '@/features/plan-form/model/schema'
import { KetoPlanResume } from '@/widgets/plan-result/model/ketoplan-resume'
import { Formik } from 'formik'
import { ValidationError } from 'yup'
import { fetchAPI } from '@/shared/api'
import { CvBasedQuestionnaireBody, CvBasedQuestionnaireResponse } from '@/shared/api/ApiDefinitions'

export function PlanFormContainer({ 
  onSubmit 
}: { onSubmit: (results: KetoPlanResume) => any }) {
  return (
    <>
      {/* FOR DEVELOPMENT
      <button style={{ zIndex: 100, position: 'absolute' }} onClick={() => {
        onSubmit({
          imt: 20.29,
          mAge: 37,
          recommendedKcal: { min: 1300, max: 1400 },
          recommendedWater: 1.8,
          achievableWeightIn28Days: 55
        })
      }}>Skip</button>
       FOR DEVELOPMENT */}
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
        onSubmit={async (formikValues: PlanFormValues, { setSubmitting }) => {
          const values = formikValues as PlanFormValuesValidated
          setSubmitting(true)
          try {
            const result = await fetchAPI<CvBasedQuestionnaireResponse>('/cv_based_questionnaire', 'POST', {
              activityInterval: values.activityInterval,
              age: values.age,
              badHabits: values.badHabits,
              currentWeight: values.currentWeight,
              dayType: values.dayType,
              gender: values.gender,
              height: values.height,
              otherFood: values.otherFood,
              proteinSources: values.proteinSources,
              targetWeight: values.targetWeight,
              vegetables: values.vegetables
            } satisfies CvBasedQuestionnaireBody)
            if(result.request.status === 200) {
              onSubmit({
                imt: result.response.imt,
                mAge: result.response.metabolicAge,
                recommendedKcal: { min: result.response.RecommendedAmountKcal, max: result.response.RecommendedAmountKcal+100 },
                recommendedWater: result.response.RecommendedAmountWater,
                achievableWeightIn28Days: result.response.AchievableWeightAfter28Days
              })
            } else {
              throw new Error('Expected 200 status code from /cv_based_questionnaire')
            }
          } catch(e) {
            console.error(e)
            alert('Что-то пошло не так. Пожалуйста, вернитесь на эту страницу позже.')
            setSubmitting(false)
          }
        }}
      >
        {props => <PlanForm formik={props as any} />}
      </Formik>
    </>
  )
}
