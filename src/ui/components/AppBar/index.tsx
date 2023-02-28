import KetoPlanLogo from '@/assets/KetoPlanLogo.svg'
import { ScreenThemeContext } from '/ui/fragments/Container'
import { useContext } from 'react'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function AppBar() {
  const { screenTheme } = useContext(ScreenThemeContext)

  return (
    <div className={cx(styles.appBar, { [styles.mobileDarkTheme]: screenTheme === 'dark' })}>
      <KetoPlanLogo />
    </div>
  )
}