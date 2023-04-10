import React from 'react'
import { Formik } from 'formik'
import { PlanResult } from '@/widgets/plan-result/ui'
import { ValidationError } from 'yup'
import { useRouter } from 'next/router'
import * as yup from 'yup'
import { KetoPlanResume } from '@/widgets/plan-result/model/ketoplan-resume'

export default function PlanResultPage() {
  const [results, setResults] = React.useState<KetoPlanResume | null>(null)
  const router = useRouter()

  React.useEffect(() => {
    const resultQuery = router.query.result
    try {
      if(typeof resultQuery === 'string') {
        setResults(JSON.parse(resultQuery) as KetoPlanResume)
      } else {
        router.push('/plan/quiz')
      }
    } catch(e) {
      console.error(e)
      router.push('/plan/quiz')
    }
  }, [router])

  return (
    <>
      {results !== null && <PlanResult resume={results} />}
    </>
  )
}