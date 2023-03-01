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
import ChickenIcon from './assets/chicken.png'
import BaconIcon from './assets/bacon.png'
import BeefIcon from './assets/beef.png'
import FishIcon from './assets/fish.png'
import NoMeatIcon from './assets/no_meat.png'
import PorkIcon from './assets/pork.png'
import SeafoodIcon from './assets/seafood.png'
import TurkeyIcon from './assets/turkey.png'

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
          { label: 'Курица', key: 'CHICKEN', icon: ChickenIcon },
          { label: 'Свинина', key: 'PORK', icon: PorkIcon },
          { label: 'Говядина', key: 'BEEF', icon: BeefIcon },
          { label: 'Индейка', key: 'TURKEY', icon: TurkeyIcon },
          { label: 'Бекон', key: 'BEACON', icon: BaconIcon },
          { label: 'Без мяса', key: 'NO_MEAT', icon: NoMeatIcon },
          { label: 'Рыба', key: 'FISH', icon: FishIcon },
          { label: 'Морепродукты', key: 'SEAFOOD', icon: SeafoodIcon },
        ]}
        value={formik.values.proteinSources}
        onChange={newValue => formik.setFieldValue('proteinSources', newValue)}
        multi={true}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.proteinSources}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}