import React, {FC, useState} from 'react'; 
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
  const SelectChangeHendler = (e:React.ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value); dispatch(setTodoStatus({id: todo.id, status: selectValue}))
  const ClickHendler = (e: React.MouseEvent<HTMLButtonElement>) => dispatch(removeTodo(todo.id))
  const ClickDoneHendler = (e:React.MouseEvent<HTMLInputElement>) => dispatch(setTodoDone({id: todo.id, completed: todo.completed}))

  return (
    <div>
      <input type='checkbox' 
             checked={todo.completed}
             onClick={ClickDoneHendler} />
      {isEdit ? <input type='text' 
                       value={value} 
                       onChange={ChangeHendler} /> :
            todo.title }
      {isEdit ? <button onClick={() => {setIsEdit(!isEdit); dispatch(setTodo({id: todo.id, title: value}))}}   >
                  setEdit
                </button>
                 : 
                <button onClick={() => setIsEdit(!isEdit)} >
                  Edit
                </button>}
      <select value={selectValue} onChange={SelectChangeHendler} >
        <option value="hold">Hold</option>
        <option value="open">Open</option>
        <option value="close">Close</option>
        <option value="in-progress">In progress</option>
      </select>
      <button onClick={ClickHendler} >
        Delete
      </button>
    </div>
  )
}