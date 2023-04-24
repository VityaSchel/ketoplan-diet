import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function LoadingResults({ open }: {
  open: boolean
}) {
  const [percentage, setPercentage] = React.useState(0)

  React.useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setPercentage(Math.min(99, percentage + 1))
      }, 30000/100)
      return () => clearTimeout(timeout)
    }
  }, [open, percentage, setPercentage])

  React.useEffect(() => {
    if(!open) setPercentage(0)
  }, [open])

  return (
    <div className={cx(styles.loading, { [styles.visible]: open })}>
      <div className={cx(styles.circle, { [styles.halfThrough]: percentage >= 50 })}>
        <div className={styles.arc} style={{ '--arc-percentage': `${percentage >= 50 ? 100 - percentage : percentage}deg` }} />
        <div className={styles.text}>{percentage}%</div>
      </div>
      <span className={styles.label}>Анализируем данные</span>
    </div>
  )
}