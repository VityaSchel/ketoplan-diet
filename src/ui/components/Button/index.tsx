import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode, variant?: 'contained' | 'tonal' | 'text', ellipsed?: boolean }) {
  const { children, variant = 'contained', ellipsed, ...otherProps } = props

  return (
    <button type='button' className={
      cx(styles.button, { 
        [styles.contained]: variant === 'contained', 
        [styles.tonal]: variant === 'tonal', 
        [styles.text]: variant === 'text',
        [styles.ellipsed]: ellipsed
      })
    } {...otherProps}>
      {children}
    </button>
  )
}