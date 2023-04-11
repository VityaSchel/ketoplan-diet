import styles from './styles.module.scss'
import Button from '@/shared/Button'
import RightArrow from './assets/right-arrow.svg'
import { Checkmark } from './checkmark'

export function Content() {
  return (
    <div className={styles.content}>
      <h1>Индивидуальный план питания</h1>
      <h3>Вы сможете добиться результата и преобразиться благодаря индивидуальному плану, который мы составили для вас</h3>
      <ul>
        <li><Checkmark /><span><b>Похудение</b> в зонах щёк, рук, живота и ног</span></li>
        <li><Checkmark /><span><b>75%</b> жиры, <b>25%</b> белки, <b>5%</b> углеводы</span></li>
        <li><Checkmark /><span><b>4 недельный</b> план питания</span></li>
      </ul>
      <Button variant='text' className={styles.getPlanButton}>Получить план <RightArrow /></Button>
    </div>
  )
}