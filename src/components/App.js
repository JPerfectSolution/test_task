import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App  = () => (
  <div className="container-fluid">
    <div className = "animated fadeIn">
      <AddTodo class = "row" />
      <VisibleTodoList class = "row" />
    </div>
  </div>
)

export default App
