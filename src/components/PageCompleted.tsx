import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { TodoItem } from './TodoItem'
import { AsyncTodoItem } from './AsyncTodoItem'

export const PageCompleted = () => {

  const todos = useTypedSelector(state => state.todo.todos)
  const asyncTodos = useTypedSelector(state => state.todo.asyncTodos)

  return (
    <div>
      {todos.map(todo => ( todo.completed === true ? 
              <TodoItem key={todo.id} todo={todo} /> : ``))}
      {asyncTodos.map(asyncTodo => ( asyncTodo.completed === true ? 
              <AsyncTodoItem key={asyncTodo.id} asyncTodo={asyncTodo} /> : ``))}
    </div>
  )
}