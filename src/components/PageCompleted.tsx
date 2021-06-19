import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { TodoItem } from './TodoItem'

export const PageCompleted = () => {

  const todos = useTypedSelector(state => state.todo.todos)
  console.log(todos)

  return (
    <div>
      {
        todos.map(todo => ( todo.completed === true ? 
              <TodoItem key={todo.id} todo={todo} />  
            : ``
          )
        )
      }
    </div>
  )
}