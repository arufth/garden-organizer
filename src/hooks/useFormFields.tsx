import { useEffect, useRef, useState } from 'react'
import { FORM_FIELDS, GARDEN_ACTIONS_FORM } from '../../constants'
import { useGetCurrentGrowLog } from './useGetCurrentGrowLog'
import { useGardenSelector } from './useGardenSelector'
import { ReturnTypeFormFields } from '../../types'

export const useFormFields = (): ReturnTypeFormFields => {
  const [formFields, setFormFields] = useState(FORM_FIELDS)
  const currentGrowLog = useGetCurrentGrowLog()
  const [currentAction, setCurrentAction] = useState('')
  const { currentCoverImg } = useGardenSelector(state => state.garden)
  const isFirstView = useRef(true)

  const changeFormFields = (newFormFields: typeof FORM_FIELDS): void => {
    setFormFields(newFormFields)
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
      const newFormFields = {
        ...formFields,
        cover: currentCoverImg
      }

      changeFormFields(newFormFields)
    }
  }, [currentCoverImg, formFields])

  return {
    formFields,
    currentAction,
    changeFormFields,
    currentCoverImg,
    isFirstView
  }
}
