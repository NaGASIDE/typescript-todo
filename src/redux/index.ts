import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TodoSlice } from './todoSlice'

const rootReducer = combineReducers({
  todo: TodoSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer
})


store.subscribe(() => {
  const todoData = store.getState().todo.todos;

  if (todoData.length) {
    const formatedTodoList = JSON.stringify([...todoData]);
    localStorage.setItem("todoList", formatedTodoList);
  }
});

export type RootState = ReturnType<typeof rootReducer>