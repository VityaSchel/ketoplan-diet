import React from 'react'
import { Chip } from '@mui/material'
import Image from 'next/image'
import styles from './styles.module.scss'
import Orange from './assets/orange.png'
import GetPlanModal from '@/features/get-plan-modal'
import { ResumeContext } from '@/shared/context/resume-context'

export default function ResumeStatistics() {
  const results = React.useContext(ResumeContext)

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
              <td>{results.imt} {results.imt < 30 && <Chip label='Норма' size='small' color='success' />}</td>
            </tr>
            <tr>
              <td>Метаболический возраст</td>
              <td>{results.mAge} лет</td>
            </tr>
            <tr>
              <td>Рекомендованное количество ккал</td>
              <td>{results.recommendedKcal.min}-{results.recommendedKcal.max} ккал</td>
            </tr>
            <tr>
              <td>Рекомендуемое количество воды</td>
              <td>{results.recommendedWater} л</td>
            </tr>
            <tr>
              <td>Достижимый вес после 28 дней</td>
              <td>{results.achievableWeightIn28Days} кг</td>
            </tr>
          </tbody>
        </table>
      </div>
      <GetPlanModal>Получить план</GetPlanModal>
    </div>
  )
}