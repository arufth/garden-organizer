import { growLogsType } from '../../types'
import { useGardenSelector } from './useGardenSelector'

export const useFilteredGrowLog = (): growLogsType => {
  const { growLog, currentSearch } = useGardenSelector(state => state.garden)
  return growLog.filter(log =>
    log.name.toLowerCase().startsWith(currentSearch.toLowerCase())
  )
}
