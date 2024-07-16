import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { defaultGrowLog } from '../../../constants'
import { growLogType, handleEventChangeType } from '../../../types'
import { GoBackSvg, UploadSvg } from '../../icons'
import { EditButtons } from '../'
import { useGardenDispatch, useGetCurrentGrowLog } from '../../hooks'
import { addLog, updateLog } from '../../garden'
import './FormGrowLog.css'

export const FormGrowLog: React.FC = () => {
  const currentGrowLog = useGetCurrentGrowLog()
  const [currentAction, setCurrentAction] = useState('')
  const { plantId } = useParams()
  const dispatch = useGardenDispatch()
  const navigate = useNavigate()
  const goBack = (): void => { navigate(-1) }

  // TODO: check if the currentId is valid
  // console.log(plantId)

  const [formFields, setFormFields] = useState({
    name: '',
    description: '',
    datePlanted: '',
    harvestDate: '',
    cover: ''
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const cover = formFields.cover === '' ? '/public/image-placeholder.jpg' : formFields.cover

    const newGrowLog: growLogType = {
      ...defaultGrowLog,
      id: plantId as string,
      name: formData.get('name') as string,
      datePlanted: formData.get('datePlanted') as string,
      harvestDate: formData.get('harvestDate') as string,
      description: formData.get('description') as string,
      cover // TODO: pick the correct image (user input)
    }
    if (currentAction === 'add') dispatch(addLog((newGrowLog)))
    else dispatch(updateLog(newGrowLog))
  }

  const handleChange = (event: handleEventChangeType): void => {
    const { name, value } = event.target
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value
    }))
  }

  useEffect(() => {
    const name = currentGrowLog.name
    const description = currentGrowLog.description
    const datePlanted = currentGrowLog.datePlanted
    const harvestDate = currentGrowLog.harvestDate
    const cover = currentGrowLog.cover !== ''
      ? currentGrowLog.cover
      : '/public/image-placeholder.jpg'

    setCurrentAction(name !== '' ? 'update' : 'add')

    setFormFields({ name, description, harvestDate, datePlanted, cover })
  }, [currentGrowLog])

  return (
    <section className='add-edit-grow-log'>
      <button onClick={goBack} className='go-prev-page'>
        <GoBackSvg />
        PREVIOUS PAGE
      </button>

      <form onSubmit={onSubmit}>
        <img src={formFields.cover} alt='' />
        <label className='file-input-label'>
          <UploadSvg />
          Upload cover
          <input
            className='file-input'
            onChange={handleChange}
            // value={formFields.cover} // TODO: change the cover input
            name='cover'
            type='file'
          />
        </label>
        <label>
          Name
          <input
            onChange={handleChange}
            value={formFields.name}
            name='name'
            required
            type='text'
            placeholder='Carrot giant'
          />
        </label>
        <label>
          Date Planted
          <input
            onChange={handleChange}
            value={formFields.datePlanted}
            name='datePlanted'
            required
            type='date'
          />
        </label>
        <label>
          Date Harvest
          <input
            onChange={handleChange}
            value={formFields.harvestDate}
            name='harvestDate'
            type='date'
          />
        </label>
        <label>
          Description
          <textarea
            onChange={handleChange}
            value={formFields.description}
            name='description'
            placeholder='A laaaaaaaaaaaaaargeee description...'
          />
        </label>
        <EditButtons />
      </form>
    </section>
  )
}
