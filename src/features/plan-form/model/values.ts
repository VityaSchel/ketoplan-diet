export type PlanFormValues = {
  gender: 'MALE' | 'FEMALE' | null
  activityInterval:
    'MINIMAL' |
    'FREQUENT_WALKS' |
    'EXERCISE_ONCE_PER_WEEK' |
    'EXERCISE_EVERY_OTHER_DAY' |
    'EXERCISE_EVERYDAY' | null
  proteinSources: ('CHICKEN' | 'PORK' | 'BEEF' | 'TURKEY' | 'BEACON' | 'NO_MEAT' | 'FISH' | 'SEAFOOD')[]
  vegetables: ('BROCCOLI' | 'MUSHROOMS' | 'ZUCCHINI' | 'CAULIFLOWER' | 'AVOCADO' | 'ASPARAGUS' | 'BELL PEPPER' | 'EGGPLANT')[]
  otherFood: ('EGGS' | 'NUTS' | 'CHEESE' | 'COTTAGE CHEESE' | 'BUTTER' | 'COCONUT')[]
  dayType: 'OFFICE_WORK' | 'OFFICE_FREELY' | 'ON_FEET' | 'MANUAL_LABOR' | 'HOME' | 'NONE' | null
  badHabits: ('LACK_OF_SLEEP' | 'NIGHT_FOOD' | 'SALT_OVERCONSUMPTION' | 'SUGAR_OVERCONSUMPTION' | 'SODA_OVERCONSUMPTION')[]
  age: number | null
  height: number | null
  currentWeight: number | null
  targetWeight: number | null
}

export type PlanFormValuesValidated = { [P in keyof PlanFormValues]: Required<NonNullable<PlanFormValues[P]>> } //NonNullable<PlanFormValues>

export const planFormValues: PlanFormValues = { 
  gender: null,
  activityInterval: null,
  proteinSources: [],
  vegetables: [],
  otherFood: [],
  dayType: null,
  badHabits: [],
  age: null,
  height: null,
  currentWeight: null,
  targetWeight: null
}