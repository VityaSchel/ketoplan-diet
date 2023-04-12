import styles from './styles.module.scss'
import TimerClock from '@/entities/plan-result/timer-clock'
import GetPlanModal from '@/features/get-plan-modal'

export default function Timer() {
  return (
    <div className={styles.timer}>
      <div className={styles.left}>
        <TimerClock />
        <span>План доступен ограниченное время</span>
      </div>
      <GetPlanModal>Получить план</GetPlanModal>
    </div>
  )
}