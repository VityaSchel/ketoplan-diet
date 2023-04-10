import { KetoPlanResume } from '@/widgets/plan-result/ui/plan-result-page-wrapper'
import { Chip } from '@mui/material'
import Image from 'next/image'
import styles from './styles.module.scss'
import Orange from './assets/orange.png'
import GetPlanModal from '@/features/get-plan-modal'

export default function ResumeStatistics(props: { data: KetoPlanResume }) {
  return (
    <div className={styles.statistics}>
      <div className={styles.heading}>
        <h1>Резюме вашего профиля</h1>
        <h3>Ваши показатели и рекомендации на основе пройденного теста</h3>
      </div>
      <div className={styles.table}>
        <Image src={Orange} alt='' className={styles.decoration} />
        <table>
          <tbody>
            <tr>
              <td>Ваш ИМТ</td>
              <td>{props.data.imt} {props.data.imt < 30 && <Chip label='Норма' size='small' color='success' />}</td>
            </tr>
            <tr>
              <td>Метаболический возраст</td>
              <td>{props.data.mAge} лет</td>
            </tr>
            <tr>
              <td>Рекомендованное количество ккал</td>
              <td>{props.data.recommendedKcal.min}-{props.data.recommendedKcal.max} ккал</td>
            </tr>
            <tr>
              <td>Рекомендуемое количество воды</td>
              <td>{props.data.recommendedWater} л</td>
            </tr>
            <tr>
              <td>Достижимый вес после 28 дней</td>
              <td>{props.data.achievableWeightIn28Days} кг</td>
            </tr>
          </tbody>
        </table>
      </div>
      <GetPlanModal>Получить план</GetPlanModal>
    </div>
  )
}