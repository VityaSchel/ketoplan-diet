import React from 'react'
import { PlanForm } from '@/widgets/plan-form'
import { Formik } from 'formik'
import PlanResult, { KetoPlanResume } from '@/ui/fragments/Plan/Result'
import { ValidationError } from 'yup'
import { ru as yupRuLocale } from 'yup-locales'
import * as Yup from 'yup'
import Head from '@/widgets/head'

Yup.setLocale(yupRuLocale)

export default function PlanPage() {
  const [result, setResult] = React.useState<KetoPlanResume | null>(null)

  return (
    <>
      <Head 
        title='План'
      />
      {result 
        ? <PlanResult resume={result} />
        : <PlanForm onSubmit={results => setResult(results)} />
      }
    </>
  )
}