import styles from './styles.module.scss'
import cx from 'classnames'
import { playfairDisplayFont } from '@/ui/fonts'

const screens = [
  'Выберите пол',
  'Физическая активность',
  'Источник белков',
  'Овощи',
  'Другие продукты',
  'Типичный день',
  'Плохие привычки',
  'Ваши параметры'
]

export default function ScreenProgress(props: { screen: number }) {
  return (
    <div className={styles.progress}>
      <span className={cx(styles.current, playfairDisplayFont.className)}>{props.screen}/{screens.length}</span>
      <div className={styles.screens}>
        {new Array(screens.length).fill(null).map((_, i) => (
          <div key={i} className={cx(styles.screen, { [styles.active]: i < props.screen })} />
        ))}
      </div>
      <span className={cx(styles.current, playfairDisplayFont.className, styles.currentName)}>{screens[props.screen]}</span>
    </div>
  )
}