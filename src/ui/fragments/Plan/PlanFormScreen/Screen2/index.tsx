import styles from './styles.module.scss'
import PlanFormScreen from '@/ui/fragments/Plan/PlanFormScreen'
import Screen2Image from '@/assets/PlanForm/Screen2.png'
import * as Yup from 'yup'
import Select from '@/ui/components/Select'
import { FormikProps, useFormik } from 'formik'
import { PlanFormValues } from '@/ui/fragments/Plan/PlanForm'
import Button from '@/ui/components/Button'

export const ValidationSchema = {
  activityInterval: Yup.string()
    .oneOf(['MINIMAL', 'FREQUENT_WALKS', 'EXERCISE_ONCE_PER_WEEK', 'EXERCISE_EVERY_OTHER_DAY', 'EXERCISE_EVERYDAY'])
    .required()
}

export default function Screen2(props: { formik: FormikProps<PlanFormValues>, onContinue: () => any }) {
  return (
    <PlanFormScreen
      title='Физическая активность'
      subtitle='Выберите вариант, который лучше всего соответсвует вам'
      screen={2}
      image={Screen2Image}
    >
      <Select 
        options={[
          { label: 'Минимальная физическая активность', key: 'MINIMAL' },
          { label: 'Я часто хожу пешком', key: 'FREQUENT_WALKS' },
          { label: 'Я занимаюсь 1-2 раза в неделю', key: 'EXERCISE_ONCE_PER_WEEK' },
          { label: 'Я занимаюсь 3-5 раз в неделю', key: 'EXERCISE_EVERY_OTHER_DAY' },
          { label: 'Я занимаюсь 5-7 раз в неделю', key: 'EXERCISE_EVERYDAY' },
        ]}
        value={props.formik.values.activityInterval}
        onChange={newValue => props.formik.setFieldValue('activityInterval', newValue)}
        multi={false}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue}>Продолжить</Button>
        <Button variant='text' onClick={props.onContinue}>Продолжить</Button>
      </div>
    </PlanFormScreen>
  )
}