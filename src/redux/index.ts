import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from './todoSlice'

const rootReducer = combineReducers({
  todo: TodoSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState =ReturnType<typeof rootReducer>