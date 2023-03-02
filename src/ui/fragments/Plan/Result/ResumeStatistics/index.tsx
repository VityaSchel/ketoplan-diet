import styles from './styles.module.scss'

export default function ResumeStatistics() {
  return (
    <div className={styles.statistics}>
      <div className={styles.heading}>
        <h1>Резюме вашего профиля</h1>
        <h3>Ваши показатели и рекомендации на основе пройденного теста</h3>
      </div>
    </div>
  )
}