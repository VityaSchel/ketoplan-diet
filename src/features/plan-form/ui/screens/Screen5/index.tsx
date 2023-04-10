import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen5Image from '@/assets/plan-form-screens/Screen5.png'
import * as Yup from 'yup'
import Select from '@/shared/Select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/PlanForm'
import Button from '@/shared/Button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ScreenTheme'
import ButterIcon from './assets/butter.png'
import CheeseIcon from './assets/cheese.png'
import CoconutIcon from './assets/coconut.png'
import CottageIcon from './assets/cottage.png'
import EggsIcon from './assets/eggs.png'
import NutsIcon from './assets/nuts.png'

export const ValidationSchema = {
  otherFood: Yup.array()
    .of(Yup.string())
    .min(1)
    .required()
}

export default function Screen5(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Другие продукты'
      subtitle='Выберите продукты, которые бы вы хотели включить в план'
      screen={5}
      image={Screen5Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <Select 
        options={[
          { label: 'Яйца', key: 'EGGS', icon: EggsIcon },
          { label: 'Орехи', key: 'NUTS', icon: NutsIcon },
          { label: 'Сыр', key: 'CHEESE', icon: CheeseIcon },
          { label: 'Творог', key: 'COTTAGE', icon: CottageIcon },
          { label: 'Сливочное масло', key: 'BUTTER', icon: ButterIcon },
          { label: 'Кокос', key: 'COCONUT', icon: CoconutIcon },
        ]}
        value={formik.values.otherFood}
        onChange={newValue => formik.setFieldValue('otherFood', newValue)}
        multi={true}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.otherFood}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}