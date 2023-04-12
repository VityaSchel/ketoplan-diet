import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen2Image from '@/assets/plan-form-screens/Screen2.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { FormikProps, useFormik, useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/PlanForm'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'

export const ValidationSchema = {
  activityInterval: Yup.string()
    .oneOf(['MINIMAL', 'FREQUENT_WALKS', 'EXERCISE_ONCE_PER_WEEK', 'EXERCISE_EVERY_OTHER_DAY', 'EXERCISE_EVERYDAY'])
    .required()
}

export default function Screen2(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Физическая активность'
      subtitle='Выберите вариант, который лучше всего соответсвует вам'
      screen={2}
      image={Screen2Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <Select 
        options={[
          { label: 'Минимальная физическая активность', key: 'MINIMAL' },
          { label: 'Я часто хожу пешком', key: 'FREQUENT_WALKS' },
          { label: 'Я занимаюсь 1-2 раза в неделю', key: 'EXERCISE_ONCE_PER_WEEK' },
          { label: 'Я занимаюсь 3-5 раз в неделю', key: 'EXERCISE_EVERY_OTHER_DAY' },
          { label: 'Я занимаюсь 5-7 раз в неделю', key: 'EXERCISE_EVERYDAY' },
        ]}
        value={formik.values.activityInterval}
        onChange={newValue => formik.setFieldValue('activityInterval', newValue)}
        multi={false}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.activityInterval}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}