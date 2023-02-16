import styles from './styles.module.scss'
import PlanFormScreen from '../index'
import { PlanFormValues } from '../../PlanForm/index'
import * as Yup from 'yup'
import GenderButton from './GenderButton'
import Male from '@/assets/Male.png'
import Female from '@/assets/Female.png'

export const ValidationSchema/* { [key in keyof PlanFormValues]?: Yup.AnySchema } */ = Yup.object<Partial<Record<keyof PlanFormValues, Yup.AnySchema>>>({
  gender: Yup.string()
    .oneOf(['MALE', 'FEMALE'])
    .required()
})

export default function Screen1() {
  return (
    <PlanFormScreen
      title={<span style={{ fontSize: 64 }}>Получите свой план кетодиеты</span>}
      subtitle='Ответьте на 8 простых вопросов, и мы рассчитаем ваш индивидуальный план питания'
      screen={1}
    >
      <div className={styles.genderSelect}>
        <GenderButton
          image={{ src: Female, alt: 'Женщина' }}
          label='План для женщины'
          onClick={() => {}}
        />
        <GenderButton
          image={{ src: Male, alt: 'Мужчина' }}
          label='План для мужчины'
          onClick={() => {}}
        />
      </div>
    </PlanFormScreen>
  )
}