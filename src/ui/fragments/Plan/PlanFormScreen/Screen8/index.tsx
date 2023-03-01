import styles from './styles.module.scss'
import PlanFormScreen from '@/ui/fragments/Plan/PlanFormScreen'
import Screen8Image from '@/assets/PlanForm/Screen8.png'
import * as Yup from 'yup'
import Select from '@/ui/components/Select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/ui/fragments/Plan/PlanForm'
import Button from '@/ui/components/Button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/ui/components/ScreenTheme'
import Input from '@/ui/components/Input'

export const ValidationSchema = {
  age: Yup.number().required(),
  height: Yup.number().required(),
  currentWeight: Yup.number().required(),
  targetWeight: Yup.number().required(),
}

export default function Screen8(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Ваши параметры'
      subtitle='Укажите ваши текущие параметры и желаемый вес'
      screen={8}
      image={Screen8Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <div className={styles.fields}>
        <Input 
          label='Ваш возраст'
          placeholder='Возраст, лет'
          type='number'
          inputProps={{ min: 1, max: 100 }}
          name='age'
          onChange={formik.handleChange}
        />
        <Input 
          label='Ваш рост'
          placeholder='Рост, cм'
          type='number'
          inputProps={{ min: 100, max: 200 }}
          name='height'
          onChange={formik.handleChange}
        />
        <Input 
          label='Текущий вес'
          placeholder='Вес, кг'
          type='number'
          inputProps={{ min: 50, max: 200 }}
          name='currentWeight'
          onChange={formik.handleChange}
        />
        <Input 
          label='Желаемый вес'
          placeholder='Вес, кг'
          type='number'
          inputProps={{ min: 50, max: 200 }}
          name='targetWeight'
          onChange={formik.handleChange}
        />
      </div>
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.age || formik.errors.height || formik.errors.currentWeight || formik.errors.targetWeight}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}