import styles from './styles.module.scss'
import MobileScreenTheme from '@/shared/ScreenTheme'
import Fold from '../Fold'
import ResumeStatistics from '../ResumeStatistics'
import PlanPromo from '../PlanPromo'
import Reviews from '../Reviews'
import { KetoPlanResume } from '../model/ketoplan-resume'

export function Result(props: { resume: KetoPlanResume }) {
  return (
    <div className={styles.resume}>
      <MobileScreenTheme theme='light' />
      <Fold />
      <ResumeStatistics data={props.resume} />
      <PlanPromo />
      <Reviews />
    </div>
  )
}