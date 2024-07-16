import { Link } from 'react-router-dom'
import { useState } from 'react'
import { AddSvg } from '../../../icons'
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
