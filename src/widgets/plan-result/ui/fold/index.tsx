import styles from './styles.module.scss'
import Button from '@/shared/ui/button'
import Image from 'next/image'
import FishImage from '@/assets/plan-result/fish.png'
import FruitImage from '@/assets/plan-result/fruit.png'
import GetPlanModal from '@/features/get-plan-modal'

export default function PlanResultFold() {
  return (
    <div className={styles.fold}>
      <Info />
      <Decorations />
    </div>
  )
}

function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.heading}>
        <h1>Ваша персональная <span>кето-диета</span> готова</h1>
        <h3>Получите персональный план прямо сейчас и начните добиваться результат, не откладывая это в долгий ящик</h3>
      </div>
      <GetPlanModal>Получить план</GetPlanModal>
    </div>
  )
}

function Decorations() {
  return (
    <span className={styles.decorationsContainer}>
      <span className={styles.decorations}>
        <span className={styles.backgroundContainer}>
          <span className={styles.background} />
        </span>
        <span className={styles.dishes}>
          <span className={styles.fish}>
            <Image src={FishImage} alt='' fill priority />
          </span>
          <span className={styles.fruit}>
            <Image src={FruitImage} alt='' fill priority />
          </span>
        </span>
      </span>
    </span>
  )
}