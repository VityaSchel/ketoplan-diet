import styles from './styles.module.scss'
import TextField, { TextFieldProps } from '@mui/material/TextField'

export default function Input(props: TextFieldProps) {
  return (
    <TextField
      variant='outlined'
      InputLabelProps={{ shrink: true }}
      className={styles.textField}
      {...props}
    />
  )
}