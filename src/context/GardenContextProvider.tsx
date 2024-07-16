import { GardenContext } from './'
import { ChildrenProps } from '../../types'
import { useFilteredGrowLog, useGetCurrentGrowLog } from '../hooks'

export const GardenContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const { getCurrentGrowLog } = useGetCurrentGrowLog()

  // TODO: useEffect to update my localStorage

  return (
    <GardenContext.Provider value={{
      growLog: useFilteredGrowLog(),
      currentGrowLog: getCurrentGrowLog()
    }}
    >
      {children}
    </GardenContext.Provider>
  )
}
