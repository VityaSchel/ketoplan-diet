import styles from './styles.module.scss'
import Sranyna from '@/assets/plan-result/sranyna.png'
import Shpyiva from '@/assets/plan-result/shpyiva.png'
import ShpyivaMobile from '@/assets/plan-result/shpyiva-mobile.png'
import Image from 'next/image'
import { PlanPromoContent } from '@/entities/plan-result/plan-promo'

export default function PlanPromo() {
  return (
    <div className={styles.planPromo}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <PlanPromoContent />
          <div className={styles.decoration}>
            <Image src={Sranyna} alt='' />
          </div>
        </div>
        <div className={styles.cardDecoration}>
          <Image src={Shpyiva} className={styles.standalone} alt='' />
          <Image src={ShpyivaMobile} className={styles.mobile} alt='' />
        </div>
      </div>
    </div>
  )
}