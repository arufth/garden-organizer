import { defaultGrowLog } from '../../constants'
import { growLogsType, growLogType } from '../../types'

export const getCurrentGrowLog = (growLog: growLogsType, id: string): growLogType => {
  const currentGrowLog = growLog.find(log => log.id === id)
  return currentGrowLog ?? defaultGrowLog
}
