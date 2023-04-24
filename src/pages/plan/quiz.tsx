import React from 'react'
import { PlanFormContainer } from '@/widgets/plan-form/ui'
import { ru as yupRuLocale } from 'yup-locales'
import * as Yup from 'yup'
import Head from '@/widgets/head'
import { useRouter } from 'next/router'
import Footer from '@/widgets/footer'

Yup.setLocale(yupRuLocale)

export default function PlanPage() {
  const router = useRouter()

  return (
    <>
      <Head 
        title='Опрос'
      />
      <PlanFormContainer 
        onSubmit={results => router.push({
          pathname: '/plan/result',
          query: { result: JSON.stringify(results) }
        }, '/plan/result')} 
      />
      <Footer />
    </>
  )
}
