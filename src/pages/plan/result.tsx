import React from 'react'
import { useRouter } from 'next/router'
import { KetoPlanResume } from '@/widgets/plan-result/model/ketoplan-resume'
import { PlanResultPageWrapper } from '@/widgets/plan-result-page-wrapper'
import MobileScreenTheme from '@/shared/ScreenTheme'
import Fold from '@/widgets/plan-result/ui/fold'
import ResumeStatistics from '@/widgets/plan-result/ui/resume-statistics'
import PlanPromo from '@/widgets/plan-result/ui/plan-promo'
import Reviews from '@/widgets/plan-result/ui/reviews'
import WhatYouGet from '@/widgets/plan-result/ui/what-you-get'

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
      {results !== null && (
        <PlanResultPageWrapper>
          <MobileScreenTheme theme='light' />
          <Fold />
          <ResumeStatistics data={results} />
          <PlanPromo />
          <Reviews />
          <WhatYouGet />
        </PlanResultPageWrapper>
      )}
    </>
  )
}