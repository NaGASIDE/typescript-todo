import React, {FC, useState} from 'react'; 
import { useDispatch } from 'react-redux'
import { removeAsyncTodo, setAsyncTodo, setAsyncTodoDone } from '../redux/todoSlice'
import { IAsyncTodo } from '../types/types'

interface TodoItemProps {
  asyncTodo: IAsyncTodo
}

export const AsyncTodoItem: FC<TodoItemProps> = ({ asyncTodo }) => {
  
  const dispatch = useDispatch() 
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(asyncTodo.title)
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const ClickHendler = (e: React.MouseEvent<HTMLButtonElement>) => dispatch(removeAsyncTodo(asyncTodo.id))
  const ClickDoneHendler = (e:React.MouseEvent<HTMLInputElement>) => dispatch(setAsyncTodoDone({id: asyncTodo.id - 1, completed: asyncTodo.completed}))

  return (
    <div>
      <input type='checkbox' 
             checked={asyncTodo.completed}
             onClick={ClickDoneHendler} />
      {isEdit ? <input type='text' 
                       value={value} 
                       onChange={ChangeHendler} /> :
                       asyncTodo.title }
      {isEdit ? <button onClick={() => {setIsEdit(!isEdit); dispatch(setAsyncTodo({id: asyncTodo.id - 1, title: value}))}}   >
                  setEdit
                </button>
                 : 
                <button onClick={() => setIsEdit(!isEdit)} >
                  Edit
                </button>}
      <button onClick={ClickHendler} >
        Delete
      </button>
    </div>
  )
}