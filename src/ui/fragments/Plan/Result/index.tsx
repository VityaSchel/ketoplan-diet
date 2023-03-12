import styles from './styles.module.scss'
import MobileScreenTheme from '@/ui/components/ScreenTheme'
import Fold from './Fold'
import ResumeStatistics from './ResumeStatistics'
import PlanPromo from './PlanPromo'

export type KetoPlanResume = { 
  imt: number, 
  mAge: number, 
  recommendedKcal: { min: number, max: number }, 
  recommendedWater: number, 
  achievableWeightIn28Days: number 
}

export default function Result(props: { resume: KetoPlanResume }) {
  return (
    <div className={styles.resume}>
      <MobileScreenTheme theme='light' />
      <Fold />
      <ResumeStatistics data={props.resume} />
      <PlanPromo />
    </div>
  )
}