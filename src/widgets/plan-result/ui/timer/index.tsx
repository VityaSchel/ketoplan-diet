import styles from './styles.module.scss'
import TimerClock from '@/entities/plan-result/timer-clock'

export default function Timer() {
  return (
    <div className={styles.timer}>
      <div className={styles.left}>
        <TimerClock />
        <span>Бесплатный план доступен ограниченное время</span>
      </div>
    </div>
  )
}