import styles from './styles.module.scss'
import cx from 'classnames'

export default function Option(props: { selected: boolean, multi: boolean, onClick: () => any, children: string }) {
  return (
    <button 
      className={cx(styles.option, { [styles.selected]: props.selected })} 
      onClick={props.onClick}
      type='button'
    >
      {props.multi && (
        <span className={cx(styles.checkmark, { [styles.checked]: props.selected })} />
      )}
      {props.children}
    </button>
  )
}