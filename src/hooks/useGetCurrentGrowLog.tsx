import { defaultGrowLog } from '../../constants'
import { growLogType } from '../../types'
import { useGardenSelector } from './useGardenSelector'

interface ReturnType {
  getCurrentGrowLog: () => growLogType
}

export const useGetCurrentGrowLog = (): ReturnType => {
  const { growLog, currentId } = useGardenSelector(state => state.garden)

  const getCurrentGrowLog = (): growLogType => {
    return growLog.find(log => log.id === currentId) ?? defaultGrowLog
  }

  return { getCurrentGrowLog }
}
