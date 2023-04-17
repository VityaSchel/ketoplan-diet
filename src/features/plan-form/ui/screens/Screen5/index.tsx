import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen5Image from '@/assets/plan-form-screens/Screen5.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/plan-form/model/values'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import ButterIcon from '@/assets/answers-icons/butter.png'
import CheeseIcon from '@/assets/answers-icons/cheese.png'
import CoconutIcon from '@/assets/answers-icons/coconut.png'
import CottageIcon from '@/assets/answers-icons/cottage.png'
import EggsIcon from '@/assets/answers-icons/eggs.png'
import NutsIcon from '@/assets/answers-icons/nuts.png'

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