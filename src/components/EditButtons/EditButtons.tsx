import { useParams } from 'react-router'
import { useGardenActions } from '../../hooks'
import './EditButtons.css'

export const EditButtons: React.FC = () => {
  const { plantId } = useParams()
  const { removeGrowLog } = useGardenActions()

  return (
    <div className='buttons-edit'>
      <button
        onClick={() => removeGrowLog(plantId as string)}
        className='delete-btn'
      >DELETE
      </button>
      <button
        className='save-btn'
      >SAVE
      </button>
    </div>
  )
}
