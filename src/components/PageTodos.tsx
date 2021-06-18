import React, { useEffect, useState } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector'
import { useDispatch } from 'react-redux'
import { TodoItem } from './TodoItem'
import { addTodo, fetchTodos, doneTodo } from '../redux/action-creators/todo'

export const PageTodos = () => {

  const [value, setValue] = useState<string>(``)

  const todos = useTypeSelector(state => state.todo.todos)
  console.log(todos)
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}
  const ClickHendler = () => {
     dispatch(addTodo(
      {userId: 1,
       id: todos.length + 1,
       title: value,
       completed: false}
));
    setValue(``)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <div>    
          <input onChange={ChangeHendler} value={value} />
          <button onClick={ClickHendler} >add</button>
          {todos.map(todo => (
            <TodoItem todo={todo}  /> 
          )
        )
      }
    </div>
  )
}