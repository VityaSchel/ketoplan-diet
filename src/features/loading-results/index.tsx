import styles from './styles.module.scss'
import cx from 'classnames'

export default function LoadingResults({ open }: {
  open: boolean
}) {
  const percentage = 0

  return (
    <div className={cx(styles.loading, { [styles.visible]: open })}>
      <div className={styles.circle}>
        <div className={cx(styles.arc, { [styles.halfThrough]: percentage >= 50 })} style={{ '--arc-percentage': `${percentage >= 50 ? 100 - percentage : percentage}deg` }} />
        <div className={styles.text}>{percentage}%</div>
      </div>
      <span className={styles.label}>Анализируем данные</span>
    </div>
  )
}