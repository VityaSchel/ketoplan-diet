import styles from './styles.module.scss'
import cx from 'classnames'
import Check from './checkmark.svg'
import Image, { StaticImageData } from 'next/image'

export default function Option(props: { selected: boolean, multi: boolean, onClick: () => any, children: string, icon?: StaticImageData }) {
  return (
    <button 
      className={cx(styles.option, { [styles.selected]: props.selected, [styles.multi]: props.multi })} 
      onClick={props.onClick}
      type='button'
    >
      {props.multi && (
        <span className={cx(styles.checkmark, { [styles.checked]: props.selected })}>
          <span className={styles.check}>
            <Check />
          </span>
        </span>
      )}
      <span>
        {props.children}
      </span>
      <span className={styles.icon}>
        {props.icon && <Image src={props.icon} fill alt='' />}
      </span>
    </button>
  )
}