import styles from './styles.module.scss'
import Button from '@/ui/components/Button'
import Image from 'next/image'
import FishImage from '../assets/fish.png'
import FruitImage from '../assets/fruit.png'

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
      <h1>Ваша персональная <span>кето-диета</span> готова</h1>
      <h3>Получите персональный план прямо сейчас и начните добиваться результат, не откладывая это в долгий ящик</h3>
      <Button ellipsed onClick={() => {}}>Получить план бесплатно</Button>
    </div>
  )
}

function Decorations() {
  return (
    <span className={styles.decorationsContainer}>
      <span className={styles.decorations}>
        <span className={styles.background} />
        <span className={styles.fish}>
          <Image src={FishImage} alt='' fill />
        </span>
        <span className={styles.fruit}>
          <Image src={FruitImage} alt='' fill />
        </span>
      </span>
    </span>
  )
}