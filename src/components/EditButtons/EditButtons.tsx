import { useNavigate, useParams } from 'react-router'
import { useGardenActions } from '../../hooks'
import './EditButtons.css'
import { showAlert } from '../../utils'

export const EditButtons: React.FC = () => {
  const { plantId } = useParams()
  const { removeGrowLog } = useGardenActions()
  const navigate = useNavigate()

  const onClick = (): void => {
    const info = {
      title: 'You just deleted it.',
      text: 'You can add more grow logs.'
    }

    showAlert(info).finally(() => {
      removeGrowLog(plantId as string)
      navigate(-1)
    })
  }

  return (
    <div className='buttons-edit'>
      <button
        type='button'
        onClick={onClick}
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
