import { initialState2 } from '../../constants'
import { initialStateType } from '../../types'

export const getGarden = (): initialStateType => {
  const gardenFromLS = window.localStorage.getItem('garden')
  if (gardenFromLS === null) return initialState2
  return JSON.parse(gardenFromLS)
}
