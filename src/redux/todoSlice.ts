import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISetTodo, ISetTodoStatus, ISetTodoDone, IAsyncTodo } from '../types/types'
import { Dispatch } from 'redux'
import { ITodoState } from '../types/types'
import axios from 'axios'

export const initialState: ITodoState = {
  todos: [],
  asyncTodos: [],
  loading: false,
  error: null,
  filter: 'all'
}

export const TodoSlice = createSlice({
  name: `todo`,
  initialState,
  reducers: {
    hydrate:(state, action) => {
      return action.payload
      },
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
    },

    fetchTodos: (state) => {
      state.loading = true
    },

    fetchTodosError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },

    fetchTodosSuccess: (state, action:PayloadAction<IAsyncTodo[]>) => {
      state.asyncTodos = [...state.todos, ...action.payload]
      state.loading = false
    },

    removeAsyncTodo: (state, action: PayloadAction<number>) => {
      state.asyncTodos = state.asyncTodos.filter((todo) => todo.id !== action.payload)
    },

    setAsyncTodo: (state, action: PayloadAction<ISetTodo>) => {
      state.asyncTodos[action.payload.id].title = action.payload.title
    },

    setAsyncTodoDone: (state, action: PayloadAction<ISetTodoDone>) => {
      state.asyncTodos[action.payload.id].completed = !action.payload.completed
    },
    
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    }
  }
})

export default TodoSlice.reducer
export const {hydrate, addTodo, removeTodo, setTodo, setTodoStatus, setTodoDone, fetchTodos, fetchTodosError, fetchTodosSuccess, removeAsyncTodo, setAsyncTodo, setAsyncTodoDone, setFilter} = TodoSlice.actions

export const getFetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(TodoSlice.actions.fetchTodos)
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      dispatch({type:TodoSlice.actions.fetchTodosSuccess, payload: response.data})
   } catch (e) {
      dispatch({type: TodoSlice.actions.fetchTodosError,
      payload: `Произошла ошибка при загрузке задач с сервера`})
    }
  }
}