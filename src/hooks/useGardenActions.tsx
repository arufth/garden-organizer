import { GardenActionsReturnType, growLogType } from '../../types'
import { addLog, removeLog, updateLog, changeCurrentSearch as changeCS, changeCurrentId as changeCID } from '../garden'
import { useGardenDispatch } from './useGardenDispatch'

export const useGardenActions = (): GardenActionsReturnType => {
  const dispatch = useGardenDispatch()

  const addGrowLog = (growLog: growLogType): void => {
    dispatch(addLog(growLog))
  }

  const removeGrowLog = (id: string): void => {
    dispatch(removeLog(id))
  }

  const updateGrowLog = (growLog: growLogType): void => {
    dispatch(updateLog(growLog))
  }

  const changeCurrentSearch = (search: string): void => {
    dispatch(changeCS(search))
  }

  const changeCurrentId = (id: string): void => {
    dispatch(changeCID(id))
  }

  return {
    addGrowLog,
    removeGrowLog,
    updateGrowLog,
    changeCurrentSearch,
    changeCurrentId
  }
}
