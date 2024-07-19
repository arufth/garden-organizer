import { DEFAULT_GARDEN } from '../../constants'
import { initialStateType } from '../../types'

export const getGarden = (): initialStateType => {
  const gardenFromLS = window.localStorage.getItem('garden')

  if (gardenFromLS === null) return DEFAULT_GARDEN
  return JSON.parse(gardenFromLS)
}
