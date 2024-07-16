import { defaultContextValueType } from './types'

export const defaultGrowLog = {
  id: '',
  name: '',
  datePlanted: '',
  cover: '',
  description: '',
  location: '',
  soilType: '',
  sunExposure: '',
  wateringSchedule: '',
  harvestDate: '',
  yieldExpected: ''
}

export const defaultContextValue: defaultContextValueType = {
  currentGrowLog: defaultGrowLog
}

export const HEADER_TABLE = [
  'Photo',
  'Name',
  'Date Planted',
  'Date arvested',
  'Edit',
  'Delete'
]
