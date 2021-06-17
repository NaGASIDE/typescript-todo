import React, { useEffect, useState } from 'react';
import { IUsers, ITodo } from '../types/types';
import { List }  from './List'
import { TodoItem } from './TodoItem'
import axios from 'axios'

export const PageTodos = () => {

  const [todos, setTodos] = useState<ITodo[]>([])
  const [value, setValue] = useState<string>(``)

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos?_limit=10`
    try {
      const response = await axios.get<ITodo[]>(url)
      setTodos(response.data)
    } catch (e) {
        alert(e)
    }
  }

  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div>    
      <input onChange={ChangeHendler} />
      <List items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  )
}