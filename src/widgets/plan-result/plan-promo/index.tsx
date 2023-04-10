import styles from './styles.module.scss'
import Sranyna from './assets/Sranyna.png'
import Shpyiva from './assets/Shpyiva.png'
import Image from 'next/image'
import CheckmarkSvg from './assets/checkmark.svg'
import Button from '@/shared/Button'

export default function PlanPromo() {
  return (
    <div className={styles.planPromo}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.content}>
            <h1>Индивидуальный план питания</h1>
            <h3>Вы сможете добиться результата и преобразиться благодаря индивидуальному плану, который мы составили для вас</h3>
            <ul>
              <li><Checkmark /><b>Похудение</b> в зонах щёк, рук, живота и ног</li>
              <li><Checkmark /><b>75%</b> жиры, <b>25%</b> белки, <b>5%</b> углеводы</li>
              <li><Checkmark /><b>4 недельный</b> план питания</li>
            </ul>
            <Button variant='text'>Получить план</Button>
          </div>
          <div className={styles.decoration}>
            <Image src={Sranyna} alt='' />
          </div>
        </div>
        <div className={styles.cardDecoration}>
          <Image src={Shpyiva} alt='' />
        </div>
      </div>
    </div>
  )
}

const Checkmark = () => <span className={styles.checkmark}><CheckmarkSvg /></span>