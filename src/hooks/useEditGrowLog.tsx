import { useNavigate } from 'react-router-dom'
import { useEditGrowLogReturnType } from '../../types'
import { useGardenActions } from './useGardenActions'

export const useEditGrowLog = (): useEditGrowLogReturnType => {
  const navigate = useNavigate()
  const { changeCurrentId } = useGardenActions()

  const editGrowLog = (id: string): void => {
    changeCurrentId(id)
    navigate(`plant/edit/${id}`)
  }

  return { editGrowLog }
}
