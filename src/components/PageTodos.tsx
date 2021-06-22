import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addTodo } from '../redux/todoSlice';
import { TodoItem } from './TodoItem'
import { AsyncTodoItem } from './AsyncTodoItem'
import { store } from '../redux/index'
import './style.sass'
import './style.css'

export const PageTodos: FC = () => {

  const [value, setValue] = useState<string>(``)
  const dispatch = useDispatch()
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)}
  const ClickHendler = () => {if (value.length >= 2) {
    dispatch(addTodo({title:value,
                      status: filter === `all` ? `hold` : filter}))
    setValue(``)}
  }

  const EnterHendler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `Enter` && value.length >= 2) {
      dispatch(addTodo({title:value,
                        status: filter === `all` ? `hold` : filter}))
      setValue(``)
    }
  }

  const { todos, asyncTodos, error, loading, filter } = useTypedSelector(state => state.todo)

  useEffect(() => {
    store.subscribe(() => {
      const todoData = store.getState().todo.todos;

        const formatedTodoList = JSON.stringify([...todoData]);
        localStorage.setItem("todoList", formatedTodoList);
    });
  }, [todos])

   if (loading) {
     return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
   }

   if (error) {
    return <div>{error}</div> 
  }

   if (filter !== 'all') {
    return (
    <div>    
      <input className='todo-input' 
             placeholder='Напишите задачу' 
             onChange={ChangeHendler} 
             value={value} 
             onKeyPress={EnterHendler}  />
      <button className='add-todo' 
              onClick={ClickHendler} >add</button>
        {todos.map(todo => (
          todo.status === filter &&
           <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
    )
  }

return (
  <div>    
`   <input className='todo-input' 
           placeholder='Напишите задачу' 
           onChange={ChangeHendler} value={value}  
           onKeyPress={EnterHendler}  />
    <button className='add-todo'
            onClick={ClickHendler} >add</button>
      {todos.map(todo => (
        <TodoItem key={todo.id} 
                  todo={todo} />
      ))}
      
      {asyncTodos.map(asyncTodo => (
        <AsyncTodoItem key={asyncTodo.id} 
                       asyncTodo={asyncTodo} />
      ))}`
  </div>
  )
}
