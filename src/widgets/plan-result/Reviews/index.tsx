import styles from './styles.module.scss'
import { ReviewCase as Case } from '@/entities/reviews/case'
import { ReviewInfo as Info } from '@/entities/reviews/info'
import case1_before from '@/assets/reviews/case1_before.png'
import case1_after from '@/assets/reviews/case1_after.png'
import case2_before from '@/assets/reviews/case2_before.png'
import case2_after from '@/assets/reviews/case2_after.png'

export default function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviews}>
        <Info />
        <div className={styles.cases}>
          <Case
            name='Мария'
            age={28}
            story={`Очень эффективное питание! Наконец-то нашла индивидуально разработанный план по кето питанию, ведь данная система питания очень эффективна! Самый быстрый, простой и вкусный способ сбросить лишние килограммы и полностью сменить гардероб! Я влезла в свои старые джинсы. Урааааа! Буду рекомендовать план питания подругам, друзьям и родственникам, чтобы закатывать кето ужины и семейные кето посиделки. Всем рекомендую!`}
            images={{
              before: case1_before,
              after: case1_after
            }}
          />
          <Case
            name='Людмила'
            age={34}
            story={`Искал диету, которая подходила бы при диабете. Наткнулся на статью про кето питание, а потом повезло получить индивидуальный план питания. Рецепты разработаны под любой вкус и кошелек, полноценное питание и никакого голодания. Вес начал уходить, уровень сахара в крови падать и я начал жить по-новому! Нисколько не раздумывайте, покупайте кето план и худейте с удовольствием! Здоровье не купишь, а вот индивидуальный план вполне разумная трата!`}
            images={{
              before: case2_before,
              after: case2_after
            }}
          />
        </div>
      </div>
    </div>
  )
}