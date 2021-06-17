import React from 'react'; 
import { useSelector } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

export function List<T>(props: ListProps<T>) {

  const todos = useTypeSelector(state => state.todo)
  console.log(todos)

  return (
    <div className='list' >
      {props.items.map(props.renderItem)}
    </div>
  )
}