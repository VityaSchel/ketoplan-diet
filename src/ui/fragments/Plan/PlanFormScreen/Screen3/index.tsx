import styles from './styles.module.scss'
import PlanFormScreen from '@/ui/fragments/Plan/PlanFormScreen'
import Screen3Image from '@/assets/PlanForm/Screen3.png'
import * as Yup from 'yup'
import Select from '@/ui/components/Select'
import { FormikProps, useFormik, useFormikContext } from 'formik'
import { PlanFormValues } from '@/ui/fragments/Plan/PlanForm'
import Button from '@/ui/components/Button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/ui/components/ScreenTheme'

export const ValidationSchema = {
  proteinSources: Yup.array()
    .of(Yup.string())
    .min(1)
    .required()
}

export default function Screen3(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Источник белков'
      subtitle='Выберите продукты, которые бы вы хотели включить в план'
      screen={3}
      image={Screen3Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <Select 
        options={[
          { label: 'Курица', key: 'CHICKEN' },
          { label: 'Свинина', key: 'PORK' },
          { label: 'Говядина', key: 'BEEF' },
          { label: 'Индейка', key: 'TURKEY' },
          { label: 'Бекон', key: 'BEACON' },
          { label: 'Без мяса', key: 'NO_MEAT' },
          { label: 'Рыба', key: 'FISH' },
          { label: 'Морепродукты', key: 'SEAFOOD' },
        ]}
        value={formik.values.proteinSources}
        onChange={newValue => formik.setFieldValue('proteinSources', newValue)}
        multi={true}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={!formik.values.proteinSources.length}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}