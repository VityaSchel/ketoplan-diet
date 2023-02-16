import styles from './styles.module.scss'

export default function PlanFormScreen(props: { 
  title: string | React.ReactNode
  subtitle: string | React.ReactNode
  children: React.ReactNode 
}) {
  return (
    <div className={styles.screen}>
      {typeof props.title === 'string' ? <h1>{props.title}</h1> : props.title}
      {typeof props.subtitle === 'string' ? <h2>{props.subtitle}</h2> : props.subtitle}
      {props.children}
    </div>
  )
}