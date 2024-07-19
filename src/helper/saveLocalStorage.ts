import { initialStateType } from '../../types'

export const saveLocalStorage = (state: initialStateType): void => {
  window.localStorage.setItem('garden', JSON.stringify(state))
}
