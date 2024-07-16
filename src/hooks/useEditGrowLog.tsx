import { useNavigate } from 'react-router-dom'
import { useEditGrowLogReturnType } from '../../types'
import { useGardenDispatch } from './useGardenDispatch'
import { changeCurrentId } from '../garden'

export const useEditGrowLog = (): useEditGrowLogReturnType => {
  const dispatch = useGardenDispatch()
  const navigate = useNavigate()

  const editGrowLog = (id: string): void => {
    dispatch(changeCurrentId(id))
    navigate(`plant/edit/${id}`)
  }

  return { editGrowLog }
}
