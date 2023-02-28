import styles from './styles.module.scss'
import PlanFormScreen from '../index'
import { PlanFormValues } from '../../PlanForm/index'
import * as Yup from 'yup'
import GenderButton from './GenderButton'
import Male from '@/assets/Male.png'
import Female from '@/assets/Female.png'
import { useFormikContext } from 'formik'
import MobileScreenTheme from '@/ui/components/ScreenTheme'

// /* { [key in keyof PlanFormValues]?: Yup.AnySchema } */ = Yup.object<Partial<Record<keyof PlanFormValues, Yup.AnySchema>>>(
export const ValidationSchema = {
  gender: Yup.string()
    .oneOf(['MALE', 'FEMALE'])
    .required()
}

export default function Screen1(props: { onContinue: () => any }) {
  const formik = useFormikContext()

  return (
    <PlanFormScreen
      title={<span style={{ fontSize: '1.45em' }}>Получите свой план кетодиеты</span>}
      subtitle='Ответьте на 8 простых вопросов, и мы рассчитаем ваш индивидуальный план питания'
      screen={1}
    >
      <MobileScreenTheme theme={'light'} />
      <div className={styles.genderSelect}>
        <GenderButton
          image={{ src: Female, alt: 'Женщина' }}
          label='План для женщины'
          onClick={() => {
            formik.setFieldValue('gender', 'MALE')
            props.onContinue()
          }}
        />
        <GenderButton
          image={{ src: Male, alt: 'Мужчина' }}
          label='План для мужчины'
          onClick={() => {
            formik.setFieldValue('gender', 'FEMALE')
            props.onContinue()
          }}
        />
      </div>
    </PlanFormScreen>
  )
}