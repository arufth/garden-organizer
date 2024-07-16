import { useEffect, useState } from 'react'
import { GardenContext } from './'
import { ChildrenProps } from '../../types'
import { useFilteredGrowLog, useGardenSelector } from '../hooks'
import { getCurrentGrowLog } from '../services'

export const GardenContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { growLog, currentId } = useGardenSelector(state => state.garden)
  // const [currentId, setCurrentId] = useState(() => getCurrentId())
  const [currentGrowLog, setCurrentGrowLog] = useState(() => getCurrentGrowLog(growLog, ''))

  useEffect(() => {
    setCurrentGrowLog(getCurrentGrowLog(growLog, currentId))
  }, [currentId, growLog])

  // TODO: useEffect to update my localStorage

  return (
    <GardenContext.Provider value={{
      growLog: useFilteredGrowLog(),
      currentGrowLog
    }}
    >
      {children}
    </GardenContext.Provider>
  )
}
