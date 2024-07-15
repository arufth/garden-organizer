import { AddNewEntry, GrowLogItem } from '../'
import './GrowLogElementView.css'
import { useContext } from 'react'
import { GardenContext } from '../../../context'

export const GrowLogElementView: React.FC = () => {
  const { growLog } = useContext(GardenContext)

  return (
    <ul>
      <AddNewEntry />
      {
        growLog.map(log => (
          <GrowLogItem
            key={log.id}
            log={log}
          />
        ))
      }
    </ul>
  )
}
