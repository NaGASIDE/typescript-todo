import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addTodo } from '../redux/todoSlice';
import { TodoItem } from './TodoItem'
import { AsyncTodoItem } from './AsyncTodoItem'
import { loadState } from '../redux/localStorage';

export const PageTodos: FC = () => {

  const [value, setValue] = useState<string>(``)
  const dispatch = useDispatch()
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}
  const ClickHendler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value.length >= 2) {dispatch(addTodo(value));setValue(``)}
  } 
   const {todos, asyncTodos, error, loading, filter} = useTypedSelector(state => state.todo)

   if (loading) {
     return <div>Loading...</div> 
   }

   if (error) {
    return <div>{error}</div> 
  }

   if (filter === 'hold') {
    return (
    <div>    
      <input onChange={ChangeHendler} value={value} />
      <button onClick={ClickHendler} >add</button>
        {todos.map(todo => (
          todo.status === `hold` ?
           <TodoItem key={todo.id} todo={todo} /> : ``
        ))}
    </div>
    )
  }

  if (filter === 'open') {
    return (
    <div>    
      <input onChange={ChangeHendler} value={value} />
      <button onClick={ClickHendler} >add</button>
        {todos.map(todo => (
          todo.status === `open` ?
           <TodoItem key={todo.id} todo={todo} /> : ``
        ))}
    </div>
    )
  }

  if (filter === 'close') {
    return (
    <div>    
      <input onChange={ChangeHendler} value={value} />
      <button onClick={ClickHendler} >add</button>
        {todos.map(todo => (
          todo.status === `close` ?
           <TodoItem key={todo.id} todo={todo} /> : ``
        ))}
    </div>
    )
  }

  if (filter === 'in-progress') {
    return (
    <div>    
      <input onChange={ChangeHendler} value={value} />
      <button onClick={ClickHendler} >add</button>
        {todos.map(todo => (
          todo.status === `in-progress` ?
           <TodoItem key={todo.id} todo={todo} /> : ``
        ))}
    </div>
    )
  }

return (
  <div>    
`    <input onChange={ChangeHendler} value={value} />
    <button onClick={ClickHendler} >add</button>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {asyncTodos.map(asyncTodo => (
        <AsyncTodoItem key={asyncTodo.id} asyncTodo={asyncTodo} />
      ))}`
  </div>
  )
}
