import { Link } from 'react-router-dom'
import { useState } from 'react'
import './AddNewEntry.css'
import { useGardenDispatch } from '../../../hooks'
import { changeCurrentId } from '../../../garden'

export const AddNewEntry: React.FC = () => {
  const [id] = useState(window.crypto.randomUUID())
  const dispatch = useGardenDispatch()

  const onClick = (): void => {
    dispatch(changeCurrentId(id))
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
