import { interFont, playfairDisplayFont } from '@/ui/fonts'
import styles from './styles.module.scss'
import cx from 'classnames'
import ScreenProgress from '@/features/plan-form/ui/screens/ScreenProgress'
import Image, { StaticImageData } from 'next/image'

export default function PlanFormScreen(props: { 
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  children: React.ReactNode 
  screen: number
  image?: StaticImageData
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
          {!props.image && (
            <div className={styles.screenProgress}>
              <ScreenProgress screen={props.screen} />
            </div>
          )}
        </div>
      </div>
      {props.image && (
        <div className={styles.rightColumn}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <Image src={props.image} alt='Декорационное изображение к форме' fill />
            </div>
          </div>
          <div className={styles.screenProgressBackground}>
            <ScreenProgress screen={props.screen} />
          </div>
        </div>
      )}
    </div>
  )
}