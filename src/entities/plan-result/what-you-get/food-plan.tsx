import Card from './card'
import List from './assets/list.svg'

export function FoodPlan() {
  return (
    <Card
      icon={<List />}
      title='План питания'
    >
      План на 28 дней с размерами порций и КБЖУ расписаный индивидуально под вас
    </Card>
  )
}