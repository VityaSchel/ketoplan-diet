import React from 'react'
import PlanForm, { PlanFormValues, planValidationSchema } from '@/ui/fragments/Plan/PlanForm'
import { Formik } from 'formik'
import PlanResult, { KetoPlanResume } from '@/ui/fragments/Plan/Result'
import { ValidationError } from 'yup'
import { ru as yupRuLocale } from 'yup-locales'
import * as Yup from 'yup'
import Head from '@/ui/components/Head'

Yup.setLocale(yupRuLocale)

export default function PlanPage() {
  const [result, setResult] = React.useState<KetoPlanResume | null>(null)

  return (
    <>
      <Head 
        title='План'
      />
      {result ?
        (
          <PlanResult 
            resume={result}
          />
        ) : (<>
          <button style={{ zIndex: 100, position: 'absolute' }} onClick={() => {
            setResult({
              imt: 20.29,
              mAge: 37,
              recommendedKcal: { min: 1300, max: 1400 },
              recommendedWater: 1.8,
              achievableWeightIn28Days: 55
            })
          }}>Skip</button>
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
            {props => <PlanForm formik={props as any} />}
          </Formik>
        </>)
      }
    </>
  )
}