import styles from './styles.module.scss'

export default function Button({ children, ...props }: { children: React.ReactNode, props: React.ButtonHTMLAttributes<HTMLButtonElement> }) {
  return (
    <button type='button' className={styles.button} {...props}>
      {children}
    </button>
  )
}