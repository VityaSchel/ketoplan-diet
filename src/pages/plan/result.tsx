import React from 'react'
import Head from '@/widgets/head'
import { useRouter } from 'next/router'
import { KetoPlanResume } from '@/widgets/plan-result/model/ketoplan-resume'
import { PlanResultPageWrapper } from '@/widgets/plan-result-page-wrapper'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import Fold from '@/widgets/plan-result/ui/fold'
import ResumeStatistics from '@/widgets/plan-result/ui/resume-statistics'
import PlanPromo from '@/widgets/plan-result/ui/plan-promo'
import Reviews from '@/widgets/plan-result/ui/reviews'
import WhatYouGet from '@/widgets/plan-result/ui/what-you-get'
import Timer from '@/widgets/plan-result/ui/timer'
import { ResumeContext } from '@/shared/context/resume-context'
import Footer from '@/widgets/footer'
import { AdvertisingCompanyResponse, PricesResponse } from '@/shared/api/ApiDefinitions'
import { PricesContext } from '@/shared/context/prices-context'
import { fetchAPI } from '@/shared/api'
import { AdvertisingContext } from '@/shared/context/ads-context'
import { hasCheckboxes } from '@x5io/ads_parameter'

export default function PlanResultPage() {
  const [results, setResults] = React.useState<KetoPlanResume | null>(null)
  const [prices, setPrices] = React.useState<PricesResponse | null>(null)
  const [checkboxesVisible, setCheckboxesVisible] = React.useState<boolean>(true)
  const router = useRouter()

  React.useEffect(() => {
    const resultCached = window.localStorage.getItem('results_cached')
    const resultQuery = router.query.result
    try {
      if (typeof resultCached === 'string') {
        setResults(JSON.parse(resultCached) as KetoPlanResume)
      } else if (typeof resultQuery === 'string') {
        setResults(JSON.parse(resultQuery) as KetoPlanResume)
      } else {
        router.push('/plan/quiz')
      }
    } catch(e) {
      console.error(e)
      router.push('/plan/quiz')
    }
  }, [router])

  React.useEffect(() => { getPrices() }, [])
  React.useEffect(() => { typeof window !== 'undefined' && getAds() }, [typeof window, router.query.ads])

  const getPrices = async () => {
    const prices = await fetchAPI<PricesResponse>('/prices', 'GET')
    setPrices(prices.response)
  }

  const getAds = async () => {
    const id = router.query.ads
    if (id !== undefined) {
      const ads = await fetchAPI<AdvertisingCompanyResponse>(`/advertising_companies/${id}`, 'GET')
      setCheckboxesVisible(hasCheckboxes(ads.response.status === 'active'))
    }
  }

  return (
    <>
      <Head
        title='Результат'
      />
      {results !== null && prices !== null && (
        <AdvertisingContext.Provider value={checkboxesVisible}>
          <PricesContext.Provider value={prices}>
            <ResumeContext.Provider value={results}>
              <PlanResultPageWrapper>
                <MobileScreenTheme theme='light' />
                <Timer />
                <Fold />
                <ResumeStatistics />
                <PlanPromo />
                <Reviews />
                <WhatYouGet />
              </PlanResultPageWrapper>
            </ResumeContext.Provider>
          </PricesContext.Provider>
        </AdvertisingContext.Provider>
      )}
      <Footer />
      <div style={{ height: 200 }} />
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src='https://vk.com/js/api/openapi.js?169',t.onload=function(){VK.Retargeting.Init("${process.env.NEXT_PUBLIC_VK_METRICA_RESULT}"),VK.Retargeting.Hit()},document.head.appendChild(t)}();` }}></script><noscript dangerouslySetInnerHTML={{ __html: `<img src="https://vk.com/rtrg?p=${process.env.NEXT_PUBLIC_VK_METRICA_RESULT}" style="position:fixed; left:-999px;" alt=""/>` }}></noscript>
    </>
  )
}
