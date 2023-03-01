import React from 'react'
import PlanForm, { PlanFormValues, planValidationSchema } from '@/ui/fragments/Plan/PlanForm'
import { Formik } from 'formik'
import PlanResult, { KetoPlanResume } from '@/ui/fragments/Plan/Result'

export default function PlanPage() {
  const [result, setResult] = React.useState<KetoPlanResume | null>(null)

  return (
    <>
      {result ?
        (
          <PlanResult 
            resume={result}
          />
        ) : (
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
                setResult({
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
            {props => <PlanForm formik={props} />}
          </Formik>
        )
      }
    </>
  )
}