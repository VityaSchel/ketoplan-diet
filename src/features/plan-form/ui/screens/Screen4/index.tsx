import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen4Image from '@/assets/plan-form-screens/Screen4.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/plan-form/model/values'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import AsparagusIcon from '@/assets/answers-icons/asparagus.png'
import AvocadoIcon from '@/assets/answers-icons/avocado.png'
import BellIcon from '@/assets/answers-icons/bell.png'
import BroccoliIcon from '@/assets/answers-icons/broccoli.png'
import CauliflowerIcon from '@/assets/answers-icons/cauliflower.png'
import EggplantIcon from '@/assets/answers-icons/eggplant.png'
import MushroomsIcon from '@/assets/answers-icons/mushrooms.png'
import ZucchiniIcon from '@/assets/answers-icons/zucchini.png'

export const ValidationSchema = {
  vegetables: Yup.array()
    .of(Yup.string())
    .min(1)
    .required()
}

export default function Screen4(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Овощи'
      subtitle='Выберите продукты, которые бы вы хотели включить в план'
      screen={4}
      image={Screen4Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <Select 
        options={[
          { label: 'Брокколи', key: 'BROCCOLI', icon: BroccoliIcon },
          { label: 'Грибы', key: 'MUSHROOMS', icon: MushroomsIcon },
          { label: 'Цуккини', key: 'ZUCCHINI', icon: ZucchiniIcon },
          { label: 'Цветная капуста', key: 'CAULIFLOWER', icon: CauliflowerIcon },
          { label: 'Авокадо', key: 'AVOCADO', icon: AvocadoIcon },
          { label: 'Спаржа', key: 'ASPARAGUS', icon: AsparagusIcon },
          { label: 'Болгарский перец', key: 'BELL', icon: BellIcon },
          { label: 'Баклажан', key: 'EGGPLANT', icon: EggplantIcon },
        ]}
        value={formik.values.vegetables}
        onChange={newValue => formik.setFieldValue('vegetables', newValue)}
        multi={true}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.vegetables}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}