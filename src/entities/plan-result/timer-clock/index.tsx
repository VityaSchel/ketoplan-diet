import styles from './styles.module.scss'

export default function TimerClock() {
  return (
    <div className={styles.circle}>
      <div className={styles.arc}></div>
      <div className={styles.text}></div>
    </div>
  )
}