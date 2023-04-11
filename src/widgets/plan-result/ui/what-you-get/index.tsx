import styles from './styles.module.scss'
import GetPlanModal from '@/features/get-plan-modal'
import { FoodPlan } from '@/entities/plan-result/what-you-get/food-plan'
import { Recipes } from '@/entities/plan-result/what-you-get/recipes'
import { Support } from '@/entities/plan-result/what-you-get/support'

export default function WhatYouGet() {
  return (
    <section className={styles.whatYouGet}>
      <h1>Что вы получите</h1>
      <div className={styles.insights}>
        <FoodPlan />
        <Recipes />
        <Support />
      </div>
      <GetPlanModal>Получить план</GetPlanModal>
    </section>
  )
}