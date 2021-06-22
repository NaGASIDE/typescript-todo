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
  const ClickHendler = () => dispatch(removeAsyncTodo(asyncTodo.id))
  const ClickDoneHendler = () => {
    dispatch(setAsyncTodoDone(
      {
        id: asyncTodo.id - 1, 
        completed: asyncTodo.completed
      }
      ))}

  return (
    <div>
      <input type='checkbox' 
             checked={asyncTodo.completed}
             onClick={ClickDoneHendler} />
      {isEdit ? <input className='async-todo-title'
                       type='text' 
                       value={value} 
                       onChange={ChangeHendler} /> :
                       <input className='async-todo-title' type='text' disabled value={asyncTodo.title} /> }
      {isEdit ? <button className='save-button' onClick={() => {setIsEdit(!isEdit); dispatch(setAsyncTodo({id: asyncTodo.id, title: value}))}}   >
                  Save
                </button>
                 : 
                <button className='edit-button' onClick={() => setIsEdit(!isEdit)} >
                  Edit
                </button>}
      <button className='delete-button' onClick={ClickHendler} >
        Delete
      </button>
    </div>
  )
}