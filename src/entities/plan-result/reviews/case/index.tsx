import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'
import cx from 'classnames'

export function ReviewCase({ name, age, story, images }: { 
  name: string, 
  age: number, 
  story: string, 
  images: { before: StaticImageData, after: StaticImageData } 
}) {
  return (
    <div className={styles.case}>
      <div className={styles.images}>
        <div className={styles.image}>
          <Image
            src={images.before}
            alt='Изображение "До" кетоплановой диеты'
          />
          <div className={styles.snack}>ДО</div>
        </div>
        <div className={styles.image}>
          <Image
            src={images.after}
            alt='Изображение "После" кетоплановой диеты'
          />
          <div className={styles.snack}>ПОСЛЕ</div>
        </div>
      </div>
      <div className={styles.story}>
        <p>{story}</p>
        <span className={styles.author}>{name}, <span className={styles.age}>{age} лет</span></span>
      </div>
    </div>
  )
}