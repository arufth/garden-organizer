export interface growLogType {
  id: string
  name: string
  datePlanted: string
  cover: string
  description: string
  location: string
  soilType: string
  sunExposure: string
  wateringSchedule: string
  harvestDate: string
  yieldExpected: string
}

export type growLogsType = growLogType[]

export type handleEventChangeType = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export interface useEditGrowLogReturnType {
  editGrowLog: (id: string) => void
}

export interface ChildrenProps {
  children: React.ReactNode
}

export interface initialStateType {
  growLog: growLogsType
  currentSearch: string
  currentId: string
  currentGrowLog: growLogType
  currentCoverImg: string
}

export interface GardenActionsReturnType {
  addGrowLog: (growLog: growLogType) => void
  removeGrowLog: (id: string) => void
  updateGrowLog: (growLog: growLogType) => void
  changeCurrentSearch: (search: string) => void
  changeCurrentId: (id: string) => void
  startUploadingFile: (file: string[]) => void
  setCoverImage: (file: string) => void
}

export interface ReturnTypeFormGrowLog {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: (event: handleEventChangeType) => void
  formFields: typeof FORM_FIELDS
  onFileInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ReturnTypeSendGrowLog {
  sendGrowLog: (newGrowLog: growLogType, currentAction: string) => void
}

export interface ReturnTypeFormFields {
  formFields: typeof FORM_FIELDS
  currentAction: string
  changeFormFields: (newFormFields: typeof FORM_FIELDS) => void
  currentCoverImg: string
  isFirstView: React.MutableRefObject<boolean>
}

export interface ReturnTypeInfoAlert {
  title: string
  text: string
}
