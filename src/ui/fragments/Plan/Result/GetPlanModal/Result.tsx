import styles from './styles.module.scss'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@/ui/components/Button'
import cx from 'classnames'
import FruitDish from '../assets/fruit.png'
import Image from 'next/image'

export default function Result(props: { onClose: () => any }) {
  return (
    <>
      <div className={styles.resultDecoration}>
        <div>
          <Image src={FruitDish} alt='' width={248} height={240} />
        </div>
      </div>
      <DialogTitle className={styles.title}>Готово!</DialogTitle>
        <DialogContent className={styles.content}>
          <DialogContentText className={cx(styles.description, styles.formDescription)}>
            Персональный план был отправлен на ваш e-mail
          </DialogContentText>
        </DialogContent>
        <Button onClick={props.onClose} variant='tonal'>Понятно</Button>
    </>
  )
}