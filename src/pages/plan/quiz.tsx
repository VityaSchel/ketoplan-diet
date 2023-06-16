import React from 'react'
import { PlanFormContainer } from '@/widgets/plan-form/ui'
import { ru as yupRuLocale } from 'yup-locales'
import * as Yup from 'yup'
import Head from '@/widgets/head'
import { useRouter } from 'next/router'

Yup.setLocale(yupRuLocale)

export default function PlanPage() {
  const router = useRouter()

  const adsParameter = typeof router.query.ads === 'string' ? `?ads=${router.query.ads}` : ''

  return (
    <>
      <Head 
        title='Опрос'
      />
      <PlanFormContainer 
        onSubmit={results => {
          const resultsSerialized = JSON.stringify(results)
          window.localStorage.setItem('results_cached', resultsSerialized)
          router.push({
            pathname: '/plan/result',
            query: { result: resultsSerialized, ads: router.query.ads }
          }, '/plan/result' + adsParameter)
        }}
      />
    </>
  )
}
