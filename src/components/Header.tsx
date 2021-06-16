import React from 'react';
import { Link } from 'react-router-dom'
import './style.sass'

export const Header = () => {
  return (
    <div className='header' >
      <h3>header</h3>
      <ul>
        <Link to='/todos' >
          <li>Задачи</li>
        </Link>
        <Link to='/complited' >
          <li>Выполненные задачи</li>
        </Link>
        <li>Фильтр</li>
      </ul>
    </div>
  )
}