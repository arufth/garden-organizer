import { useEffect, useState } from 'react'
import { GardenContext } from './'
import { ChildrenProps } from '../../types'
import { useGardenSelector } from '../hooks'
import { getCurrentId, getCurrentGrowLog } from '../services'

export const GardenContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { growLog } = useGardenSelector(state => state.garden)
  const [currentId, setCurrentId] = useState(() => getCurrentId())
  const [currentGrowLog, setCurrentGrowLog] = useState(() => getCurrentGrowLog(growLog, ''))

  const { currentSearch } = useGardenSelector(state => state.garden)

  const changeCurrentId = (id: string): void => { setCurrentId(id) }

  const growLogFilter = (): typeof growLog => {
    const newFilterGrowLog = growLog.filter(log =>
      log.name.toLowerCase().startsWith(currentSearch.toLowerCase()))
    return newFilterGrowLog
  }

  useEffect(() => {
    setCurrentGrowLog(getCurrentGrowLog(growLog, currentId))
  }, [currentId, growLog])

  // TODO: useEffect to update my localStorage

  return (
    <GardenContext.Provider value={{
      growLog: growLogFilter(),
      currentId,
      changeCurrentId,
      currentGrowLog
    }}
    >
      {children}
    </GardenContext.Provider>
  )
}
