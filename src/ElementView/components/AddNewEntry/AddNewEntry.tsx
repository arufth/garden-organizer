import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AddSvg } from '../../../icons'
import './AddNewEntry.css'
import { useGardenActions } from '../../../hooks'

export const AddNewEntry: React.FC = () => {
  const [id] = useState(window.crypto.randomUUID())
  const { changeCurrentId } = useGardenActions()

  const onClick = (): void => {
    changeCurrentId(id)
  }

  return (
    <li className='add-new-entry'>
      <Link
        onClick={onClick}
        to={`plant/edit/${id}`}
      >
        <AddSvg />
      </Link>
      <h4>Add a new entry</h4>
    </li>
  )
}
