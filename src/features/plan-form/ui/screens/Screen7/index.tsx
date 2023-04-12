import styles from './styles.module.scss'
import PlanFormScreen from '@/features/plan-form/ui/screens'
import Screen7Image from '@/assets/plan-form-screens/Screen7.png'
import * as Yup from 'yup'
import Select from '@/shared/ui/select'
import { useFormikContext } from 'formik'
import { PlanFormValues } from '@/features/PlanForm'
import Button from '@/shared/ui/button'
import GoBackArrow from '../GoBackArrow.svg'
import MobileScreenTheme from '@/shared/ui/screen-theme'
import ChocolateIcon from './assets/chocolate.png'
import ClockIcon from './assets/clock.png'
import ColaIcon from './assets/cola.png'
import PillowIcon from './assets/pillow.png'
import SaltIcon from './assets/salt.png'

export const ValidationSchema = {
  badHabits: Yup.array()
    .of(Yup.string())
}

export default function Screen7(props: { onContinue: () => any, onGoBack: () => any }) {
  const formik = useFormikContext<PlanFormValues>()

  return (
    <PlanFormScreen
      title='Плохие привычки'
      subtitle='Выберите одну или несколько привычек, которые у вас есть'
      screen={7}
      image={Screen7Image}
    >
      <MobileScreenTheme theme={'dark'} />
      <Select 
        options={[
          { label: 'Часто не высыпаюсь', key: 'LACK_OF_SLEEP', icon: PillowIcon },
          { label: 'Ем поздно ночью', key: 'NIGHT_FOOD', icon: ClockIcon },
          { label: 'Употребляю много соли', key: 'SALT_OVERCONSUMPTION', icon: SaltIcon },
          { label: 'Часто ем сладкое', key: 'SUGAR_OVERCONSUMPTION', icon: ChocolateIcon },
          { label: 'Люблю газировки', key: 'SODA_OVERCONSUMPTION', icon: ColaIcon },
          { label: 'Ничего из перечисленного', key: 'NONE' },
        ]}
        value={formik.values.badHabits}
        onChange={newValue => {
          if(newValue.includes('NONE')) {
            formik.setFieldValue('badHabits', [])
          } else {
            formik.setFieldValue('badHabits', newValue)
          }
        }}
        multi={true}
      />
      <div className={styles.actions}>
        <Button variant='contained' onClick={props.onContinue} disabled={formik.errors.badHabits}>Продолжить</Button>
        <Button variant='text' onClick={props.onGoBack}><GoBackArrow /> Назад</Button>
      </div>
    </PlanFormScreen>
  )
}