import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen8Image from '@/assets/PlanForm/Screen8.png'
import * as Yup from 'yup'
import Select from '@/shared/Select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/PlanForm'
import Button from '@/shared/Button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ScreenTheme'
import Input from '@/shared/Input'

export const ValidationSchema = {
  age: Yup.number().min(1).max(100).required(),
  height: Yup.number().min(100).max(200).required(),
  currentWeight: Yup.number().min(50).max(200).required(),
  targetWeight: Yup.number().min(50).max(200).required(),
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
          error={formik.errors.age}
        />
        <Input 
          label='Ваш рост'
          placeholder='Рост, cм'
          type='number'
          inputProps={{ min: 100, max: 200 }}
          name='height'
          onChange={formik.handleChange}
          error={formik.errors.height}
        />
        <Input 
          label='Текущий вес'
          placeholder='Вес, кг'
          type='number'
          inputProps={{ min: 50, max: 200 }}
          name='currentWeight'
          onChange={formik.handleChange}
          error={formik.errors.currentWeight}
        />
        <Input 
          label='Желаемый вес'
          placeholder='Вес, кг'
          type='number'
          inputProps={{ min: 50, max: 200 }}
          name='targetWeight'
          onChange={formik.handleChange}
          error={formik.errors.targetWeight}
        />
      </div>
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={Boolean(formik.errors.age || formik.errors.height || formik.errors.currentWeight || formik.errors.targetWeight)}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}