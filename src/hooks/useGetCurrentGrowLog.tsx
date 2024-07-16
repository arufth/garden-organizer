import { defaultGrowLog } from '../../constants'
import { growLogType } from '../../types'
import { useGardenSelector } from './useGardenSelector'

export const useGetCurrentGrowLog = (): growLogType => {
  const { growLog, currentId } = useGardenSelector(state => state.garden)

  return growLog.find(log => log.id === currentId) ?? defaultGrowLog
}
