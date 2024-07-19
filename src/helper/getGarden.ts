import { defaultGarden } from '../../constants'
import { initialStateType } from '../../types'

export const getGarden = (): initialStateType => {
  const gardenFromLS = window.localStorage.getItem('garden')

  if (gardenFromLS === null) return defaultGarden
  return JSON.parse(gardenFromLS)
}
