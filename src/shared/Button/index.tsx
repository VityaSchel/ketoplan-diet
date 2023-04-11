import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button({ children, variant = 'contained', ellipsed, className, ...otherProps }: React.PropsWithChildren<{
  variant?: 'contained' | 'tonal' | 'text', 
  ellipsed?: boolean
  className: string
}> & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type='button' className={
      cx(styles.button, { 
        [styles.contained]: variant === 'contained', 
        [styles.tonal]: variant === 'tonal', 
        [styles.text]: variant === 'text',
        [styles.ellipsed]: ellipsed
      }, className)
    } {...otherProps}>
      {children}
    </button>
  )
}