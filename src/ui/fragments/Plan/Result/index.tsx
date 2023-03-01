import styles from './styles.module.scss'
import Fold from './Fold'

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
      <Fold />
    </div>
  )
}