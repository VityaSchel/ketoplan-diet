import styles from './styles.module.scss'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { FormHelperText } from '@mui/material'

export default function Input(props: Omit<TextFieldProps, 'error'> & { error?: string, onEnter: (e: React.KeyboardEvent<HTMLDivElement>) => any }) {
  const { error, ...textFieldProps } = props

  return (
    <div className={styles.input}>
      <TextField
        variant='filled'
        InputLabelProps={{ shrink: true }}
        className={styles.textField}
        error={Boolean(error)}
        onKeyDown={e => {
          if(e.key === 'Enter') {
            props.onEnter?.(e)
          }
        }}
        {...textFieldProps}
      />
      {props.error && (
        <div className={styles.error}>
          <FormHelperText error>{props.error}</FormHelperText>
        </div>
      )}
    </div>
  )
}