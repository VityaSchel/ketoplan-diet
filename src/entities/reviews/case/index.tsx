import styles from './styles.module.scss'
import Image, { StaticImageData } from 'next/image'

export function ReviewCase({ name, age, story, images }: { 
  name: string, 
  age: number, 
  story: string, 
  images: { before: StaticImageData, after: StaticImageData } 
}) {
  return (
    <div className={styles.case}>
      <div className={styles.images}>
        <Image
          src={images.before}
          alt='Изображение "До" кетоплановой диеты'
        />
        <Image
          src={images.after}
          alt='Изображение "После" кетоплановой диеты'
        />
      </div>
      <div className={styles.story}>
        <p>{story}</p>
        <span className={styles.author}>{name}, <span className={styles.age}>{age} лет</span></span>
      </div>
    </div>
  )
}