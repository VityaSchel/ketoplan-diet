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
  
  const getCv = (values: PlanFormValuesValidated) => new Promise<KetoPlanResume>(async resolve => {
    // const result = await fetchAPI<CvBasedQuestionnaireResponse>('/cv_based_questionnaire', 'POST', {
    //   activityInterval: values.activityInterval,
    //   age: values.age,
    //   badHabits: values.badHabits,
    //   currentWeight: values.currentWeight,
    //   dayType: values.dayType,
    //   gender: values.gender,
    //   height: values.height,
    //   otherFood: values.otherFood,
    //   proteinSources: values.proteinSources,
    //   targetWeight: values.targetWeight,
    //   vegetables: values.vegetables
    // } satisfies CvBasedQuestionnaireBody)
    // if (result.request.status === 200) {
    const result = {
      response: {
        imt: Math.round(Math.random() * 10 + 20),
        metabolicAge:  Math.round(Math.random() * 10 + 20),
        recommendedAmountKcal: Math.round(Math.random() * 3000 + 1000),
        recommendedAmountWater:  Math.round(Math.random() * 3 + 1),
        achievableWeightAfter28Days:  Math.round(Math.random() * 5 + 60),
        foodType: (['dump', 'gain'] as const)[Math.floor(Math.random() * 2)]
      } satisfies CvBasedQuestionnaireResponse
    }
      resolve({
        imt: result.response.imt,
        mAge: result.response.metabolicAge,
        recommendedKcal: { min: result.response.recommendedAmountKcal, max: result.response.recommendedAmountKcal + 100 },
        recommendedWater: result.response.recommendedAmountWater,
        achievableWeightIn28Days: result.response.achievableWeightAfter28Days,
        foodType: result.response.foodType
      })
    // } else {
    //   throw new Error('Expected 200 status code from /cv_based_questionnaire')
    // }
  })

  return (
    <>
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
        onSubmit={async (formikValues: PlanFormValues) => {
          return new Promise<void>(async resolve => {
            const values = formikValues as PlanFormValuesValidated
            try {
              await new Promise(resolve => setTimeout(resolve, 5000))
              onSubmit(await getCv(values))
            } catch(e) {
              console.error(e)
              alert('Что-то пошло не так. Пожалуйста, вернитесь на эту страницу позже.')
              resolve()
            }
          })
        }}
      >
        {props => <PlanForm formik={props as any} />}
      </Formik>
    </>
  )
}
