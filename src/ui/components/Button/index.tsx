import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode, variant: 'contained' | 'text' }) {
  const { children, variant = 'contained', ...otherProps } = props
  return (
    <button type='button' className={cx(styles.button, { [styles.contained]: variant === 'contained', [styles.text]: variant === 'text' })} {...otherProps}>
      {children}
    </button>
  )
}