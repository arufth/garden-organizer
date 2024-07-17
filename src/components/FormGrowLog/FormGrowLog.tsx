import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { defaultGrowLog, FORM_FIELDS, GARDEN_ACTIONS_FORM } from '../../../constants'
import { growLogType, handleEventChangeType } from '../../../types'
import { UploadSvg } from '../../icons'
import { EditButtons, PreviousPageButton } from '../'
import { useGardenActions, useGetCurrentGrowLog } from '../../hooks'
import './FormGrowLog.css'

export const FormGrowLog: React.FC = () => {
  const currentGrowLog = useGetCurrentGrowLog()
  const [currentAction, setCurrentAction] = useState('')
  const { plantId } = useParams()
  const { addGrowLog, updateGrowLog } = useGardenActions()

  const [formFields, setFormFields] = useState(FORM_FIELDS)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const cover = formFields.cover === '' ? '/image-placeholder.jpg' : formFields.cover

    const newGrowLog: growLogType = {
      ...defaultGrowLog,
      id: plantId as string,
      name: formData.get('name') as string,
      datePlanted: formData.get('datePlanted') as string,
      harvestDate: formData.get('harvestDate') as string,
      description: formData.get('description') as string,
      cover // TODO: pick the correct image (user input)
    }

    if (currentAction === GARDEN_ACTIONS_FORM.ADD) addGrowLog(newGrowLog)
    else updateGrowLog(newGrowLog)
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
      : '/image-placeholder.jpg'

    setCurrentAction(name !== ''
      ? GARDEN_ACTIONS_FORM.UPDATE
      : GARDEN_ACTIONS_FORM.ADD)

    setFormFields({
      name,
      description,
      harvestDate,
      datePlanted,
      cover
    })
  }, [currentGrowLog])

  return (
    <section className='add-edit-grow-log'>
      <PreviousPageButton />

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
