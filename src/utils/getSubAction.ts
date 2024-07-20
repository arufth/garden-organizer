import { GARDEN_ACTIONS_FORM } from '../../constants'

export const getSubAction = (currentAction: string): string => {
  return currentAction === GARDEN_ACTIONS_FORM.UPDATE
    ? 'updat'
    : 'add'
}
