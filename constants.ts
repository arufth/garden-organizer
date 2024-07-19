import { getGarden } from './src/helper/getGarden'
import { getGrowLog } from './src/services'
import { initialStateType } from './types'

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
  growLog: getGrowLog(),
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
