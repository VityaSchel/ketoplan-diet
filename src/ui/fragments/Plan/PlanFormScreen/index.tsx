import { interFont, playfairDisplayFont } from '@/ui/fonts'
import styles from './styles.module.scss'
import cx from 'classnames'
import ScreenProgress from '@/ui/fragments/Plan/PlanFormScreen/ScreenProgress'

export default function PlanFormScreen(props: { 
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  children: React.ReactNode 
  screen: number
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.leftColumn}>
        <div className={styles.leftColumnContent}>
          <h1 className={cx(playfairDisplayFont.className, styles.title)}>{props.title}</h1>
          <h2 className={cx(interFont.className, styles.subtitle)}>{props.subtitle}</h2>
          <div className={styles.screenContent}>
            {props.children}
          </div>
          <div style={{ marginTop: 80 }}>
            <ScreenProgress screen={props.screen} />
          </div>
        </div>
      </div>
    </div>
  )
}