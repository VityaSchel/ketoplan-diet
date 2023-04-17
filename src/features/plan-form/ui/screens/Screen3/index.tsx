import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen3Image from '@/assets/plan-form-screens/Screen3.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/plan-form/model/values'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import ChickenIcon from '@/assets/answers-icons/chicken.png'
import BaconIcon from '@/assets/answers-icons/bacon.png'
import BeefIcon from '@/assets/answers-icons/beef.png'
import FishIcon from '@/assets/answers-icons/fish.png'
import NoMeatIcon from '@/assets/answers-icons/no_meat.png'
import PorkIcon from '@/assets/answers-icons/pork.png'
import SeafoodIcon from '@/assets/answers-icons/seafood.png'
import TurkeyIcon from '@/assets/answers-icons/turkey.png'

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