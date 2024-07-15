import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import './AddNewEntry.css'
import { GardenContext } from '../../../context'

export const AddNewEntry: React.FC = () => {
  const [id] = useState(window.crypto.randomUUID())
  const { changeCurrentId } = useContext(GardenContext)

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
