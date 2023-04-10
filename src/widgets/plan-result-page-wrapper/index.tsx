import styles from './styles.module.scss'

export function PlanResultPageWrapper({ children }: React.PropsWithChildren) {
  return (
    <main className={styles.resume}>{children}</main>
  )
}