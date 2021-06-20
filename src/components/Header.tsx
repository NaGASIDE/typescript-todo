import React, {FC, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { getFetchTodos, setFilter } from '../redux/todoSlice';
import './style.sass'

export const Header: FC = () => {

  const [filter, setFilterValue] = useState(`all`)
  const dispatch = useDispatch()
  const ClickHendler = (e: React.MouseEvent<HTMLButtonElement>) => dispatch(getFetchTodos())
  const ChangeHendler = (e: React.ChangeEvent<HTMLSelectElement>) => setFilterValue(e.target.value); dispatch(setFilter(filter))
  
  return (
    <div className='header' >
      <h3>header</h3>
      <ul>
        <Link to='/todos' >
          <li>Задачи</li>
        </Link>
        <Link to='/completed' >
          <li>Выполненные задачи</li>
        </Link>
        <li>Фильтр</li>
      </ul>
      <select value={filter} onChange={ChangeHendler} >
        <option value="all">all</option>
        <option value="hold">Hold</option>
        <option value="open">Open</option>
        <option value="close">Close</option>
        <option value="in-progress">In progress</option>
      </select>
      <button onClick={ClickHendler} >Загрузить туду с сервере</button>
    </div>
  )
}