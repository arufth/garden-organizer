
import { useParams } from 'react-router-dom'
import { useFormFields, useGardenActions, useSendGrowLog } from './'
import { DEFAULT_GROW_LOG } from '../../constants'
import { growLogType, handleEventChangeType, ReturnTypeFormGrowLog } from '../../types'
import { getInfoAlert, getSubAction, showAlert } from '../utils'

export const useFormGrowLog = (): ReturnTypeFormGrowLog => {
  const { plantId } = useParams()
  const { formFields, currentAction, changeFormFields, isFirstView } = useFormFields()
  const { sendGrowLog } = useSendGrowLog()
  const { startUploadingFile } = useGardenActions()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    const newGrowLog: growLogType = {
      ...DEFAULT_GROW_LOG,
      id: plantId as string,
      name: formData.get('name') as string,
      datePlanted: formData.get('datePlanted') as string,
      harvestDate: formData.get('harvestDate') as string,
      description: formData.get('description') as string,
      cover: formFields.cover === ''
        ? '/image-placeholder.jpg'
        : formFields.cover
    }

    const subAction = getSubAction(currentAction)
    const info = getInfoAlert(subAction, formFields.name)

    showAlert(info)
      .finally(() => sendGrowLog(newGrowLog, currentAction))
  }

  const handleChange = (event: handleEventChangeType): void => {
    const { name, value } = event.target
    const newFormFields = {
      ...formFields,
      [name]: value
    }
    changeFormFields(newFormFields)
  }

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    isFirstView.current = false
    const { target } = event
    if (target.files?.length === 0 || target.files === null) return
    startUploadingFile(target.files as unknown as string[])
  }

  return {
    onSubmit,
    handleChange,
    formFields,
    onFileInputChange
  }
}
