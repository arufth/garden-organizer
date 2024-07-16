import { growLog } from './growLog.json'

export interface defaultContextValueType {
  growLog: typeof growLog
  currentGrowLog: growLogType
}

export interface growLogType {
  id: string
  name: string
  datePlanted: string
  cover: string
  description: string
  location: string
  soilType: string
  sunExposure: string
  wateringSchedule: string
  harvestDate: string
  yieldExpected: string
}

export type growLogsType = growLogType[]

export type handleEventChangeType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export interface useEditGrowLogReturnType {
  editGrowLog: (id: string) => void
}

export interface ChildrenProps {
  children: React.ReactNode
}
