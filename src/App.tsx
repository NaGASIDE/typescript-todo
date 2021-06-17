import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { PageTodos } from './components/PageTodos'
import { PageCompleted } from './components/PageCompleted'

export const App = () => {
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