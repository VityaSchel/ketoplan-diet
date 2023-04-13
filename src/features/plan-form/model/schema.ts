import * as Yup from 'yup'
// TODO: either move to entities or separate schemas from ui in screens
import { ValidationSchema as Screen1Validation } from '../ui/screens/Screen1'
import { ValidationSchema as Screen2Validation } from '../ui/screens/Screen2'
import { ValidationSchema as Screen3Validation } from '../ui/screens/Screen3'
import { ValidationSchema as Screen4Validation } from '../ui/screens/Screen4'
import { ValidationSchema as Screen5Validation } from '../ui/screens/Screen5'
import { ValidationSchema as Screen6Validation } from '../ui/screens/Screen6'
import { ValidationSchema as Screen7Validation } from '../ui/screens/Screen7'
import { ValidationSchema as Screen8Validation } from '../ui/screens/Screen8'

export const planValidationSchema = 
  Yup.object({
    ...Screen1Validation,
    ...Screen2Validation,
    ...Screen3Validation,
    ...Screen4Validation,
    ...Screen5Validation,
    ...Screen6Validation,
    ...Screen7Validation,
    ...Screen8Validation,
  })

planValidationSchema.typeError('Обязательное поле')