import { useParams } from 'react-router-dom'
import { UploadSvg } from '../../icons'
import { EditButtons, PreviousPageButton } from '../'
import { useFormGrowLog } from '../../hooks'
import './FormGrowLog.css'

export const FormGrowLog: React.FC = () => {
  const { plantId } = useParams()
  const { handleChange, onSubmit, formFields } = useFormGrowLog()

  return (
    <section className='add-edit-grow-log'>
      <PreviousPageButton />

      <form onSubmit={(event) => onSubmit(event, plantId as string)}>
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
