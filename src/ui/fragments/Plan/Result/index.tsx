import styles from './styles.module.scss'
import Fold from './Fold'
import ResumeStatistics from './ResumeStatistics'
import MobileScreenTheme from '@/ui/components/ScreenTheme'

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
      <MobileScreenTheme theme='dark' />
      <Fold />
      <ResumeStatistics data={props.resume} />
    </div>
  )
}