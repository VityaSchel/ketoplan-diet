import styles from './styles.module.scss'
import Button from '@/ui/components/Button'

export default function PlanResultFold() {
  return (
    <div className={styles.fold}>
      <h1>Ваша персональная <span>кето-диета</span> готова</h1>
      <h3>Получите персональный план прямо сейчас и начните добиваться результат, не откладывая это в долгий ящик</h3>
      <Button variant='contained' onClick={() => {}}>Получить план бесплатно</Button>
    </div>
  )
}