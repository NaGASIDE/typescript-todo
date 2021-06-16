import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Todos } from './components/Todos'
import { Completed } from './components/Completed'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
          <Route path='/todos' component={ Todos } exact />
          <Route path='/completed' component={ Completed } exact />
      </div>
    </BrowserRouter>
  )
}