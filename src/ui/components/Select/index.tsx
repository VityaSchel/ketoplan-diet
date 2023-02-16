import Option from './Option'
import styles from './styles.module.scss'
import cx from 'classnames'

export default function Select(props: { multi: true, options: { label: string, key: string }[], value: string[] | null, onChange: (newValue: string) => any }): JSX.Element
export default function Select(props: { multi: false, options: { label: string, key: string }[], value: string | null, onChange: (newValue: string) => any }): JSX.Element
export default function Select(props: { multi?: boolean, options: { label: string, key: string }[], value: string | string[] | null, onChange: (newValue: string) => any }): JSX.Element {
  return (
    <div className={cx(styles.select, { [styles.multi]: props.multi })}>
      {props.options.map(option => (
        <Option 
          multi={props.multi ?? false} 
          key={option.key} 
          selected={props.value !== null && (props.multi ? props.value.includes(option.key) : props.value === option.key)}
          onClick={() => props.onChange(option.key)}
        >
          {option.label}
        </Option>
      ))}
    </div>
  )
}