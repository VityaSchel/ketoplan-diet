import styles from './styles.module.scss'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import Button from '@/ui/components/Button'
import cx from 'classnames'
import FruitDish from '../assets/fruit.png'

export default function Result(props: { onClose: () => any }) {
  return (
    <>
      <DialogTitle className={styles.title}>Готово!</DialogTitle>
        <DialogContent className={styles.content}>
          <div>
            <Image src={FruitDish} />
          </div>
          <DialogContentText className={cx(styles.description, styles.formDescription)}>
            Персональный план был отправлен на ваш e-mail
          </DialogContentText>
        </DialogContent>
        <Button onClick={props.onClose} variant='tonal'>Понятно</Button>
    </>
  )
}