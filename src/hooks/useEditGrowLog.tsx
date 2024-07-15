import { useNavigate } from 'react-router-dom'
import { useEditGrowLogReturnType } from '../../types'
import { useContext } from 'react'
import { GardenContext } from '../context'

export const useEditGrowLog = (): useEditGrowLogReturnType => {
  const { changeCurrentId } = useContext(GardenContext)
  const navigate = useNavigate()

  const editGrowLog = (id: string): void => {
    changeCurrentId(id)
    navigate(`plant/edit/${id}`)
  }

  return { editGrowLog }
}
