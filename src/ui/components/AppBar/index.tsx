import KetoPlanLogo from '@/assets/KetoPlanLogo.svg'
import styles from './styles.module.scss'

export default function AppBar() {
  return (
    <div className={styles.appBar}>
      <KetoPlanLogo />
    </div>
  )
}