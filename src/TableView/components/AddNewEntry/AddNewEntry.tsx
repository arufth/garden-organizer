import { Link } from 'react-router-dom'
import { useState } from 'react'
import './AddNewEntry.css'
import { useGardenActions } from '../../../hooks'

export const AddNewEntry: React.FC = () => {
  const [id] = useState(window.crypto.randomUUID())
  const { changeCurrentId } = useGardenActions()

  const onClick = (): void => {
    changeCurrentId(id)
  }

  return (
    <Link
      onClick={onClick}
      to={`plant/edit/${id}`}
      className='add-new-entry'
    >ADD NEW ENTRY
    </Link>
  )
}
