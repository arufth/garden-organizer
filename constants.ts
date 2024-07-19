import { getGarden } from './src/helper/getGarden'
import { initialStateType } from './types'
import { growLog } from './growLog.json'

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

export const HEADER_TABLE = [
  'Photo',
  'Name',
  'Date Planted',
  'Date arvested',
  'Edit',
  'Delete'
]

export const defaultGarden: initialStateType = {
  growLog,
  currentSearch: '',
  currentId: '',
  currentGrowLog: defaultGrowLog,
  currentCoverImg: ''
}

export const initialState: initialStateType = getGarden()

export const FORM_FIELDS = {
  name: '',
  description: '',
  datePlanted: '',
  harvestDate: '',
  cover: ''
}

export const GARDEN_ACTIONS_FORM = {
  ADD: 'ADD',
  UPDATE: 'UPDATE'
}
