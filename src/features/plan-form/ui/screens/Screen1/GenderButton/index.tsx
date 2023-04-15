import Image, { StaticImageData } from 'next/image'
import styles from './styles.module.scss'
import RightArrow from './RightArrow.svg'
import { playfairDisplayFont } from '@/shared/fonts'

export default function GenderButton(props: { image: { src: StaticImageData, alt: string }, label: string, onClick: () => any }) {
  return (
    <button className={styles.gender} onClick={props.onClick} type='button'>
      <Image 
        className={styles.image}
        src={props.image.src}
        alt={props.image.alt}
      />
      <div className={styles.label}>
        <span className={playfairDisplayFont.className}>{props.label}</span>
        <RightArrow />
      </div>
    </button>
  )
}