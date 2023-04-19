import React from 'react'
import { KetoPlanResume } from '@/widgets/plan-result/model/ketoplan-resume'

// @ts-expect-error Context will never be null, because as it renders it already has value
export const ResumeContext = React.createContext<KetoPlanResume>(null)