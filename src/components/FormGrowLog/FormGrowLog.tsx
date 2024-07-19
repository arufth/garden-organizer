import { UploadSvg } from '../../icons'
import { EditButtons, PreviousPageButton } from '../'
import { useFormGrowLog } from '../../hooks'
import './FormGrowLog.css'

export const FormGrowLog: React.FC = () => {
  const { handleChange, onSubmit, formFields, onFileInputChange } = useFormGrowLog()

  return (
    <section className='add-edit-grow-log'>
      <PreviousPageButton />
      <form onSubmit={onSubmit}>
        <h3 className='plant-name-title'>{formFields.name.toUpperCase()}</h3>
        <div className='inputs-div'>
          <section className='image-description-section'>
            <img src={formFields.cover} alt='' />
            <label>
              Description
              <textarea
                onChange={handleChange}
                value={formFields.description}
                name='description'
                placeholder='A laaaaaaaaaaaaaargeee description...'
              />
            </label>
          </section>
          <section className='basic-information-section'>
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
            <label className='file-input-label'>
              <p>
                Click <span>here</span> to select an image.
              </p>
              <input
                className='file-input'
                onChange={onFileInputChange}
                name='cover'
                type='file'
              />
              <button type='button'>
                <UploadSvg />
              </button>
            </label>
          </section>
        </div>
        <EditButtons />
      </form>
    </section>
  )
}
