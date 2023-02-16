import { interFont, playfairDisplayFont } from '@/ui/fonts'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function PlanFormScreen(props: { 
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  children: React.ReactNode 
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
        </div>
      </div>
    </div>
  )
}