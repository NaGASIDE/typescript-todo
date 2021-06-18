import React, {FC, useState} from 'react'; 
import { useDispatch } from 'react-redux'
import { doneTodo, deleteTodo } from '../redux/action-creators/todo'

interface TodoItemProps {
  todo: any
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  
  const dispatch = useDispatch()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(todo.title)
  const ChangeHendler = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
  
  return (
    <div>
      <input type='checkbox' 
             checked={todo.completed} 
             onClick={() => dispatch(doneTodo(todo.id - 1))} />
      {isEdit ? <input type='text' 
                       value={value} 
                       onChange={ChangeHendler} /> :
            todo.title }
      {isEdit ? <button onClick={() => {setIsEdit(!isEdit); /*dispatch(editTodo())*/}}   >
                  setEdit
                </button>
                 : 
                <button onClick={() => setIsEdit(!isEdit)} >
                  Edit
                </button>}
      <button onClick={() => dispatch(deleteTodo(todo.id))} >
        Delete
      </button>
    </div>
  )
}