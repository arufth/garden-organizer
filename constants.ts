import { getGarden } from './src/helper'
import { initialStateType } from './types'
import { growLog } from './growLog.json'

export const DEFAULT_GROW_LOG = {
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

export const DEFAULT_GARDEN: initialStateType = {
  growLog,
  currentSearch: '',
  currentId: '',
  currentGrowLog: DEFAULT_GROW_LOG,
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
