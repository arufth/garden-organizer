import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGardenActions, useGardenSelector, useGetCurrentGrowLog, useSendGrowLog } from './'
import { defaultGrowLog, FORM_FIELDS, GARDEN_ACTIONS_FORM } from '../../constants'
import { growLogType, handleEventChangeType, ReturnTypeFormGrowLog } from '../../types'

import { showAlert } from '../utils'

export const useFormGrowLog = (): ReturnTypeFormGrowLog => {
  const { plantId } = useParams()
  const [formFields, setFormFields] = useState(FORM_FIELDS)
  const [currentAction, setCurrentAction] = useState('')
  const currentGrowLog = useGetCurrentGrowLog()
  const { sendGrowLog } = useSendGrowLog()
  const { startUploadingFile } = useGardenActions()
  const { currentCoverImg } = useGardenSelector(state => state.garden)
  const isFirstView = useRef(true)

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

    const subAction = currentAction === GARDEN_ACTIONS_FORM.UPDATE
      ? 'updat'
      : 'add'

    const info = {
      title: `You just ${subAction}ed ${formFields.name}.`,
      text: 'You can continue modify this grow log.'
    }

    showAlert(info)
      .finally(() => sendGrowLog(newGrowLog, currentAction))
  }

  const handleChange = (event: handleEventChangeType): void => {
    const { name, value } = event.target
    setFormFields(prevFields => ({
      ...prevFields,
      [name]: value
    }))
  }

  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    isFirstView.current = false
    const { target } = event
    if (target.files?.length === 0 || target.files === null) return
    startUploadingFile(target.files as unknown as string[])
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

  useEffect(() => {
    if (!isFirstView.current) {
      setFormFields(prevFields => ({
        ...prevFields,
        cover: currentCoverImg
      }))
    }
  }, [currentCoverImg])

  return {
    onSubmit,
    handleChange,
    formFields,
    onFileInputChange
  }
}
