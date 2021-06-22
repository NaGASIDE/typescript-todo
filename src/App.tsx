import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { PageTodos } from './components/PageTodos'
import { PageCompleted } from './components/PageCompleted'
import { useDispatch } from 'react-redux'
import { getFetchTodos, getLocalTodos } from './redux/todoSlice'

export const App: FC = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocalTodos())
    dispatch(getFetchTodos())
  })

  return (
    <BrowserRouter>
      <Header />
      <div>
          <Route path='/todos' component={ PageTodos } exact />
          <Route path='/completed' component={ PageCompleted } exact />
      </div>
    </BrowserRouter>
  )
}