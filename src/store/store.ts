import { configureStore } from '@reduxjs/toolkit'
import { gardenSlice } from '../garden/gardenSlice'

export const store = configureStore({
  reducer: {
    garden: gardenSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
