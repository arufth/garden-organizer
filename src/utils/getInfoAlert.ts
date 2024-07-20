import { ReturnTypeInfoAlert } from '../../types'

export const getInfoAlert = (subAction: string, formFieldsName: string): ReturnTypeInfoAlert => {
  return {
    title: `You just ${subAction}ed ${formFieldsName}.`,
    text: 'You can continue modify this grow log.'
  }
}
