import { GARDEN_ACTIONS_FORM } from '../../constants'
import { growLogType, ReturnTypeSendGrowLog } from '../../types'
import { useGardenActions } from './useGardenActions'

export const useSendGrowLog = (): ReturnTypeSendGrowLog => {
  const { addGrowLog, updateGrowLog } = useGardenActions()

  const sendGrowLog = (newGrowLog: growLogType, currentAction: string): void => {
    if (currentAction === GARDEN_ACTIONS_FORM.ADD) addGrowLog(newGrowLog)
    else updateGrowLog(newGrowLog)
  }

  return {
    sendGrowLog
  }
}
