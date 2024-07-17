import { useNavigate } from 'react-router'
import { GoBackSvg } from '../../icons'

import './PreviousPageButton.css'

export const PreviousPageButton: React.FC = () => {
  const navigate = useNavigate()
  const goBack = (): void => { navigate(-1) }
  return (
    <button onClick={goBack} className='go-prev-page'>
      <GoBackSvg />
      PREVIOUS PAGE
    </button>
  )
}
