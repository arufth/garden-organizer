import { growLogType } from '../../../../types'
import { useEditGrowLog, useGardenActions } from '../../../hooks'
import { DeleteSvg, EditSvg } from '../../../icons'
import './GrowLogItem.css'
interface Props {
  log: growLogType
}

export const GrowLogItem: React.FC<Props> = ({ log }) => {
  const { editGrowLog } = useEditGrowLog()
  const { removeGrowLog } = useGardenActions()

  return (
    <li>
      <img src={log.cover} alt={log.name} />
      <div>
        <h3>{log.name}</h3>
        <div className='actions'>
          <button
            className='delete-btn'
            onClick={() => removeGrowLog(log.id)}
          >
            <DeleteSvg />
          </button>
          <button
            className='edit-btn'
            onClick={() => editGrowLog(log.id)}
          >
            <EditSvg />
          </button>
        </div>
      </div>
    </li>
  )
}
