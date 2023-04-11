import Card from './card'
import Bell from './assets/bell.svg'

export function Recipes() {
  return (
    <Card
      icon={Bell}
      title='Рецепты'
    >
      Рецепты для приготовления вкусных, сытных и быстрых блюд в соответствии с диетой
    </Card>
  )
}