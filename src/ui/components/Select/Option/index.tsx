import styles from './styles.module.scss'
import cx from 'classnames'

export default function Option(props: { selected: boolean, multi: boolean, onClick: () => any, children: string }) {
  return (
    <button 
      className={cx(styles.option, { [styles.selected]: props.selected })} 
      onClick={props.onClick}
      type='button'
    >
      {props.children}
    </button>
  )
}