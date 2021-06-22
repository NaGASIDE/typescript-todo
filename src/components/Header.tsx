import React, {FC, useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { setFilter } from '../redux/todoSlice';
import './style.sass'

export const Header: FC = () => {

  const [filter, setFilterValue] = useState(`all`)
  const dispatch = useDispatch()
  const ChangeHendler = (e: React.ChangeEvent<HTMLSelectElement>) => setFilterValue(e.target.value); dispatch(setFilter(filter))
  
  return (
    <div className='header' >
      <ul>
        <Link to='/todos' >
          <li>Задачи</li>
        </Link>
        <Link to='/completed' >
          <li>Выполненные задачи</li>
        </Link>
        <li>Фильтр</li>
      </ul>
      <select className='header-fiter' value={filter} onChange={ChangeHendler} >
        <option value="all">all</option>
        <option value="hold">Hold</option>
        <option value="open">Open</option>
        <option value="close">Close</option>
        <option value="in-progress">In progress</option>
      </select>
    </div>
  )
}