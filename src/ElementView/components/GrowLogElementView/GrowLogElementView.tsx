import { AddNewEntry, GrowLogItem } from '../'
import './GrowLogElementView.css'
import { useFilteredGrowLog } from '../../../hooks'

export const GrowLogElementView: React.FC = () => {
  const growLog = useFilteredGrowLog()

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
