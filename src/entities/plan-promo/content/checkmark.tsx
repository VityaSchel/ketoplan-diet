import styles from './styles.module.scss'
import CheckmarkSvg from './assets/checkmark.svg'

export function Checkmark() {
  return (
    <span className={styles.checkmark}><CheckmarkSvg /></span>
  )
}