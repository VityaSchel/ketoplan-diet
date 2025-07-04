import React from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

const INITIAL_TIME = 60 * 5
const START_SLOWDOWN_AFTER = 60 * 5 // 60 * 1 — Ask Sasha
const SLOWDOWN_K = 60 * 30
function easeInCubic(x: number): number {
  return x * x;
}

export default function TimerClock() {
  const [timer, setTimer] = React.useState(0)

  const timeoutDelay = timer <= START_SLOWDOWN_AFTER ? 0 : easeInCubic((timer - START_SLOWDOWN_AFTER)/(INITIAL_TIME - START_SLOWDOWN_AFTER))*SLOWDOWN_K

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setTimer(Math.max(1, timer + 1))
    }, 1000+timeoutDelay*1000)
    return () => clearTimeout(timeout)
  }, [timer, setTimer])

  const left = Math.max(1, INITIAL_TIME-timer)
  const minutes = Math.floor(left / 60)
  const seconds = left%60

  const percentage = Math.max(1, timer/INITIAL_TIME*100)

  return (
    <div className={cx(styles.circle, { [styles.halfThrough]: percentage >= 50 })}>
      <div className={styles.arc} style={{ '--arc-percentage': `${percentage >= 50 ? 100-percentage : percentage}deg` }} />
      <div className={styles.text}>{minutes}:{('0'+seconds).slice(-2)}</div>
    </div>
  )
}