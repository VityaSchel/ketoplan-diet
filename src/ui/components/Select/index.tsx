import Option from './Option'
import styles from './styles.module.scss'
import cx from 'classnames'
import { StaticImageData } from 'next/image'

type OptionData = { label: string, key: string, icon?: StaticImageData }
export default function Select(props: { multi: true, options: OptionData[], value: string[] | null, onChange: (newValue: string[]) => any }): JSX.Element
export default function Select(props: { multi: false, options: OptionData[], value: string | null, onChange: (newValue: string) => any }): JSX.Element
export default function Select(props: { multi?: boolean, options: OptionData[], value: string | string[] | null, onChange: (newValue: string[] | string) => any }): JSX.Element {
  const handleChange = (option: OptionData) => {
    if(props.multi) {
      const value = props.value as string[]
      if(value.includes(option.key)) {
        props.onChange(value.filter(v => v !== option.key))
      } else {
        props.onChange([...value, option.key])
      }
    } else {
      props.onChange(option.key)
    }
  }

  return (
    <div className={cx(styles.select, { [styles.multi]: props.multi })}>
      {props.options.map(option => (
        <Option 
          multi={props.multi ?? false} 
          key={option.key} 
          selected={props.value !== null && (props.multi ? props.value.includes(option.key) : props.value === option.key)}
          onClick={() => handleChange(option)}
          icon={option.icon}
        >
          {option.label}
        </Option>
      ))}
    </div>
  )
}