import styles from './styles.module.scss'
import cx from 'classnames'

export default function Button({ children, variant = 'contained', ...props }: { children: React.ReactNode, variant: 'contained' | 'text', props: React.ButtonHTMLAttributes<HTMLButtonElement> }) {
  return (
    <button type='button' className={cx(styles.button, { [styles.contained]: variant === 'contained', [styles.text]: variant === 'text' })} {...props}>
      {children}
    </button>
  )
}