import PlanFormScreen from '@/ui/fragments/Plan/PlanFormScreen'
import Screen2Image from '@/assets/PlanForm/Screen2.png'
import * as Yup from 'yup'

export const ValidationSchema = {
  activityInterval: Yup.string()
    .oneOf(['MINIMAL', 'FREQUENT_WALKS', 'EXERCISE_ONCE_PER_WEEK', 'EXERCISE_EVERY_OTHER_DAY', 'EXERCISE_EVERYDAY'])
    .required()
}

export default function Screen2() {
  return (
    <PlanFormScreen
      title='Физическая активность'
      subtitle='Выберите вариант, который лучше всего соответсвует вам'
      screen={2}
      image={Screen2Image}
    >
      
    </PlanFormScreen>
  )
}