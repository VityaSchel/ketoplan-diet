import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen8Image from '@/assets/plan-form-screens/Screen8.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/plan-form/model/values'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import Input from '@/shared/ui/input'
import { ru as yupRuLocale } from 'yup-locales'

Yup.setLocale(yupRuLocale)

export const ValidationSchema = {
  age: Yup.number().min(1, 'Минимум 1').max(100, 'Максимум 100').required('Обязательное поле').typeError('Обязательное поле'),
  height: Yup.number().min(100, 'Минимум 100').max(200, 'Максимум 200').required('Обязательное поле').typeError('Обязательное поле'),
  currentWeight: Yup.number().min(30, 'Минимум 30').max(200, 'Максимум 200').required('Обязательное поле').typeError('Обязательное поле'),
  targetWeight: Yup.number().min(30, 'Минимум 30').max(200, 'Максимум 200').required('Обязательное поле').typeError('Обязательное поле'),
}

export default function Screen8(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()
  const isSubmitDisabled = Boolean(formik.errors.age || formik.errors.height || formik.errors.currentWeight || formik.errors.targetWeight)

  const handleContinue = (e: React.KeyboardEvent<HTMLDivElement>) => {
    props.onContinue()
  }

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
          onEnter={isSubmitDisabled ? (e: any) => {} : handleContinue}
          error={formik.errors.age}
        />
        <Input 
          label='Ваш рост'
          placeholder='Рост, cм'
          type='number'
          inputProps={{ min: 100, max: 200 }}
          name='height'
          onChange={formik.handleChange}
          onEnter={isSubmitDisabled ? (e: any) => {} : handleContinue}
          error={formik.errors.height}
        />
        <Input 
          label='Текущий вес'
          placeholder='Вес, кг'
          type='number'
          inputProps={{ min: 30, max: 200 }}
          name='currentWeight'
          onChange={formik.handleChange}
          onEnter={isSubmitDisabled ? (e: any) => {} : handleContinue}
          error={formik.errors.currentWeight}
        />
        <Input 
          label='Желаемый вес'
          placeholder='Вес, кг'
          type='number'
          inputProps={{ min: 30, max: 200 }}
          name='targetWeight'
          onChange={formik.handleChange}
          onEnter={isSubmitDisabled ? (e: any) => {} : handleContinue}
          error={formik.errors.targetWeight}
        />
      </div>
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={isSubmitDisabled}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}