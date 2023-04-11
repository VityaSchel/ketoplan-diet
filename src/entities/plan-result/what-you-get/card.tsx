import styles from './styles.module.scss'

export default function Card({ icon, title, children }: React.PropsWithChildren<{
  icon: React.ReactNode
  title: string
}>) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>
        {icon}
      </span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}