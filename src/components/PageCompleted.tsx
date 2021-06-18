import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { doneTodo } from '../redux/action-creators/todo'

export const PageCompleted = () => {
  const completed = useTypeSelector(state => state.todo.todos)
  const dispatch = useDispatch()
  return (
    <div>
      {
        completed.map(todo => (
            <div>
              {todo.completed === true ? 
                <div> 
                  <input type='checkbox' checked={todo.completed} 
                         onClick={() => dispatch(doneTodo(todo.id - 1))} /> 
                    {todo.title} 
               </div> : ``
              }
            </div>
          )
        )
      }
    </div>
  )
}