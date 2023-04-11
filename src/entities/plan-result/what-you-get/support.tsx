import Card from './card'
import Fridge from './assets/fridge.svg'

export function Support() {
  return (
    <Card
      icon={<Fridge />}
      title='Поддержка'
    >
      Советы, как следовать питанию, не срываться и соблюдать правильное пищевое поведение
    </Card>
  )
}