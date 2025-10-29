import React from 'react'
import TodoProvider from './context/TodoProvider'
import TodoForm from './componets/TodoForm'
import TodoList from './componets/TodoList'


const App = () => {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider> 
  )
}

export default App