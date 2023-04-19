export type KetoPlanResume = { 
  imt: number, 
  mAge: number, 
  recommendedKcal: { min: number, max: number }, 
  recommendedWater: number, 
  achievableWeightIn28Days: number 
  foodType: 'dump' | 'gain'
}