import PlanFormScreen from './index'
import { PlanFormValues } from '../PlanForm/index'
import * as Yup from 'yup'

export const ValidationSchema/* { [key in keyof PlanFormValues]?: Yup.AnySchema } */ = Yup.object<Partial<Record<keyof PlanFormValues, Yup.AnySchema>>>({
  gender: Yup.string()
    .oneOf(['MALE', 'FEMALE'])
    .required()
})

export default function Screen1() {
  return (
    <PlanFormScreen
      title={<h1 style={{ fontSize: 64 }}>Получите свой план кетодиеты</h1>}
      subtitle='Ответьте на 8 простых вопросов, и мы рассчитаем ваш индивидуальный план питания'
    >
      
    </PlanFormScreen>
  )
}