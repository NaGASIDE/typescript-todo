import React, { FC, useState } from 'react'; 
import { useDispatch } from 'react-redux'
import { removeTodo, setTodo, setTodoStatus, setTodoDone } from '../redux/todoSlice'
import { ITodo } from '../types/types'

interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  
  const dispatch = useDispatch() 
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(todo.title)
  const [selectValue, setSelectValue] = useState<string>(todo.status)
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  const SelectChangeHendler = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value); 
    dispatch(setTodoStatus({id: todo.id, status: selectValue}))
  }
  const ClickHendler = () => dispatch(removeTodo(todo.id))
  const ClickDoneHendler = () => {
    dispatch(setTodoDone({id: todo.id, completed: todo.completed}));
    dispatch(setTodoStatus({id: todo.id, status: `close`}));
  }

  return (
    <div>
      <input type='checkbox' 
             checked={todo.completed}
             onClick={ClickDoneHendler} />
      {isEdit ? <>
        <input className='todo-title'
               type='text' 
               value={value} 
               onChange={ChangeHendler} />

        <select className='todo-select' 
                value={selectValue} 
                onChange={SelectChangeHendler} >
          <option value="hold">Hold</option>
          <option value="open">Open</option>
          <option value="close">Close</option>
          <option value="in-progress">In progress</option>
        </select>
                </> :
                <>
            <input className='todo-title' 
                   type='text' 
                   value={todo.title}
                   disabled />
            <input className='todo-status' 
                   type='text' 
                   value={selectValue} 
                   disabled />
               </> }
      {isEdit ? <button className='save-button' 
                        onClick={() => {
                          setIsEdit(!isEdit); 
                          dispatch(setTodo({id: todo.id, title: value}))
                          }}>
                  Save
                </button>
                 : 
                <button className='edit-button' 
                        onClick={() => setIsEdit(!isEdit)} >
                  Edit
                </button>}
      <button className='delete-button' 
              onClick={ClickHendler} >
        Delete
      </button>
    </div>
  )
}