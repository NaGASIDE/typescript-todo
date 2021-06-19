import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addTodo } from '../redux/todoSlice';
import { TodoItem } from './TodoItem'

export const PageTodos = () => {

  const [value, setValue] = useState<string>(``)
  const dispatch = useDispatch()
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}
  const ClickHendler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value.length >= 2) {dispatch(addTodo(value));setValue(``)}
  } 
   const todos = useTypedSelector(state => state.todo.todos)
   console.log(todos)

  return (
    <div>    
      <input onChange={ChangeHendler} value={value} />
      <button onClick={ClickHendler} >add</button>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  )
}