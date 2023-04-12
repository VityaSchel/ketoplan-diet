import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen6Image from '@/assets/plan-form-screens/Screen6.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/PlanForm'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import ButterIcon from './assets/butter.png'
import CheeseIcon from './assets/cheese.png'
import CoconutIcon from './assets/coconut.png'
import CottageIcon from './assets/cottage.png'
import EggsIcon from './assets/eggs.png'
import NutsIcon from './assets/nuts.png'

export const ValidationSchema = {
  dayType: Yup.string()
    .required()
}

export default function Screen6(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Ваш типичный день'
      subtitle='Выберите вариант, который лучше всего соответсвует вам'
      screen={6}
      image={Screen6Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <Select 
        options={[
          { label: 'В офисе', key: 'OFFICE_WORK' },
          { label: 'В офисе, но регулярно выхожу', key: 'OFFICE_FREELY' },
          { label: 'Большую часть дня провожу на ногах', key: 'ON_FEET' },
          { label: 'Ручной труд', key: 'MANUAL_LABOR' },
          { label: 'Большую часть дня провожу дома', key: 'HOME' },
        ]}
        value={formik.values.dayType}
        onChange={newValue => formik.setFieldValue('dayType', newValue)}
        multi={false}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.dayType}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}