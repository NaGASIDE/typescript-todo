import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISetTodo, ISetTodoStatus, ISetTodoDone } from '../types/types'

import { ITodoState } from '../types/types'

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
  value: 0
}

export const TodoSlice = createSlice({
  name: `todo`,
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({id: state.todos.length, title: action.payload, status: 'hold', completed: false})
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    setTodo: (state, action: PayloadAction<ISetTodo>) => {
      state.todos[action.payload.id].title = action.payload.title
    },
    setTodoStatus: (state, action: PayloadAction<ISetTodoStatus>) => {
      state.todos[action.payload.id].status = action.payload.status 
    },
    setTodoDone: (state, action: PayloadAction<ISetTodoDone>) => {
      state.todos[action.payload.id].completed = !action.payload.completed
    }
  }
})

export default TodoSlice.reducer
export const {addTodo, removeTodo, setTodo, setTodoStatus, setTodoDone} = TodoSlice.actions