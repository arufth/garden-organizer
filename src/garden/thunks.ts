import { fileUpload } from '../helper'
import { setCoverImage } from './gardenSlice'

export const startUploadingFile = (files: string[]) => {
  return async (dispatch) => {
    const url = await fileUpload(files[0])

    if (url === undefined) return
    dispatch(setCoverImage(url))
  }
}
