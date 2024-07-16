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

export interface initialStateType {
  growLog: growLogsType
  currentSearch: string
  currentId: string
  currentGrowLog: growLogType
}

export interface GardenActionsReturnType {
  addGrowLog: (growLog: growLogType) => void
  removeGrowLog: (id: string) => void
  updateGrowLog: (growLog: growLogType) => void
  changeCurrentSearch: (search: string) => void
  changeCurrentId: (id: string) => void
}
