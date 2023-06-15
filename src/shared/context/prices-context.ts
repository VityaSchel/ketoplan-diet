import React from 'react'
import { PricesResponse } from '@/shared/api/ApiDefinitions'

// @ts-expect-error Context will never be null, because as it renders it already has value
export const PricesContext = React.createContext<PricesResponse>(null)