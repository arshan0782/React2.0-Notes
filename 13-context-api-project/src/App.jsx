import React from 'react'
import TodoProvider from './context/TodoProvider'
import TodoForm from './componets/TodoForm'
import TodoList from './componets/TodoList'


const App = () => {
  return (
    <TodoProvider>
    <div className="app-container">
        <h1 className="app-title">📝 Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider> 
  )
}

export default App