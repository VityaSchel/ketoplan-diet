import styles from './styles.module.scss'
import Sranyna from '@/assets/plan-result/sranyna.png'
import Shpyiva from '@/assets/plan-result/shpyiva.png'
import Image from 'next/image'
import { PlanPromoContent } from '@/entities/plan-promo/content'

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
          <Image src={Shpyiva} alt='' />
        </div>
      </div>
    </div>
  )
}