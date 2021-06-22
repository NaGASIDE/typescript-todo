import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISetTodo, ISetTodoStatus, ISetTodoDone, IAsyncTodo, IAddTodo } from '../types/types'
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
    addTodo: (state, action: PayloadAction<IAddTodo>) => {
      state.todos.unshift({id: state.todos.length, title:action.payload.title, status:action.payload.status, completed: false})
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },

    setTodo: (state, action: PayloadAction<ISetTodo>) => {
      let index = -1
      for (let i = 0; i < state.todos.length; i++) {
        index++
        if (state.todos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        state.todos[index].title = action.payload.title
      }
    },

    setTodoStatus: (state, action: PayloadAction<ISetTodoStatus>) => {
      let index = -1
      for (let i = 0; i < state.todos.length; i++) {
        index++
        if (state.todos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        state.todos[index].status = action.payload.status
      }
    },

    setTodoDone: (state, action: PayloadAction<ISetTodoDone>) => {
      let index = -1
      for (let i = 0; i < state.todos.length; i++) {
        index++
        if (state.todos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        state.todos[index].completed = !action.payload.completed
      }
    },

    fetchTodos: (state) => {
      state.loading = true
    },

    fetchTodosError: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },

    fetchTodosSuccess: (state, action:PayloadAction<IAsyncTodo[]>) => {
      state.asyncTodos = [...action.payload]
      state.loading = false
    },

    removeAsyncTodo: (state, action: PayloadAction<number>) => {
      state.asyncTodos = state.asyncTodos.filter((todo) => todo.id !== action.payload)
    },

    setAsyncTodo: (state, action: PayloadAction<ISetTodo>) => {
      let index = -1
      for (let i = 0; i < state.asyncTodos.length; i++) {
        index++
        if (state.asyncTodos[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        state.asyncTodos[index].title = action.payload.title
      }
    },

    setAsyncTodoDone: (state, action: PayloadAction<ISetTodoDone>) => {
      state.asyncTodos[action.payload.id].completed = !action.payload.completed
    },
    
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
    getLocalTodos: (state) => {
      try {
        const localData = localStorage.getItem("todoList");
        const formatLocalData = localData ? JSON.parse(localData) : [];
        state.todos = [...formatLocalData]
      } catch (e) {
        console.log(e)
      }
    }
  }
})

export default TodoSlice.reducer
export const { addTodo, removeTodo, setTodo, setTodoStatus, setTodoDone, fetchTodos, fetchTodosError, fetchTodosSuccess, removeAsyncTodo, setAsyncTodo, setAsyncTodoDone, setFilter, getLocalTodos} = TodoSlice.actions

export const getFetchTodos = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(TodoSlice.actions.fetchTodos())
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      setTimeout(() => {
        dispatch({type:TodoSlice.actions.fetchTodosSuccess, payload: response.data})
      }, 2000)
   } catch (e) {
      dispatch({type: TodoSlice.actions.fetchTodosError,
      payload: `Произошла ошибка при загрузке задач с сервера`})
    }
  }
}