import styles from './styles.module.scss'
import PlanFormScreen from '@/ui/fragments/Plan/PlanFormScreen'
import Screen4Image from '@/assets/PlanForm/Screen4.png'
import * as Yup from 'yup'
import Select from '@/ui/components/Select'
import { FormikProps, useFormik, useFormikContext } from 'formik'
import { PlanFormValues } from '@/ui/fragments/Plan/PlanForm'
import Button from '@/ui/components/Button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/ui/components/ScreenTheme'
import AsparagusIcon from './assets/asparagus.png'
import AvocadoIcon from './assets/avocado.png'
import BellIcon from './assets/bell.png'
import BroccoliIcon from './assets/broccoli.png'
import CauliflowerIcon from './assets/cauliflower.png'
import EggplantIcon from './assets/eggplant.png'
import MushroomsIcon from './assets/mushrooms.png'
import ZucchiniIcon from './assets/zucchini.png'

export const ValidationSchema = {
  proteinSources: Yup.array()
    .of(Yup.string())
    .min(1)
    .required()
}

export default function Screen4(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Источник белков'
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