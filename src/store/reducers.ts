import { combineReducers } from "redux";
import { TodoReducer as todo } from './Todo/reducer'

export const rootReducer = combineReducers({
  todo,
})

export type RootState = ReturnType<typeof rootReducer>