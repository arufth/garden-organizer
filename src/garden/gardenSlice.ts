import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { growLogType, growLogsType } from '../../types'
import { getGrowLog } from '../services'

export interface initialStateType {
  growLog: growLogsType
  currentSearch: string
}

const initialState: initialStateType = {
  growLog: getGrowLog(),
  currentSearch: ''
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
    }
  }
})

export const {
  addLog,
  removeLog,
  updateLog,
  changeCurrentSearch
} = gardenSlice.actions
