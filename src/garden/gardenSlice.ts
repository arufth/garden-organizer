import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { growLogType, growLogsType } from '../../types'
import { getGrowLog } from '../services'

export interface initialStateType {
  growLog: growLogsType
  currentSearch: string
  currentId: string
}

const initialState: initialStateType = {
  growLog: getGrowLog(),
  currentSearch: '',
  currentId: '' // call getCurrentId()
}

export const gardenSlice: Slice<initialStateType> = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    addLog: ({ growLog }, action: PayloadAction<growLogType>) => {
      growLog.unshift(action.payload)
    },

    removeLog: (state, action: PayloadAction<string>) => {
      const id = action.payload
      const { growLog } = state
      return {
        ...state,
        growLog: growLog.filter(log => log.id !== id)
      }
    },

    updateLog: (state, action: PayloadAction<growLogType>) => {
      const { id } = action.payload
      const { growLog } = state
      const newGrowLog = growLog.map(log => {
        if (log.id === id) return action.payload
        else return log
      })
      return {
        ...state,
        growLog: newGrowLog
      }
    },

    changeCurrentSearch: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentSearch: action.payload
      }
    },

    changeCurrentId: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        currentId: action.payload
      }
    }
  }
})

export const {
  addLog,
  removeLog,
  updateLog,
  changeCurrentSearch,
  changeCurrentId
} = gardenSlice.actions
