import React, { useState } from "react";
import { TodoDataContext } from "./TodoContext";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), text: task }]);
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo)=> todo.id !== id))

  }
      return (
    <TodoDataContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoDataContext.Provider>
  );
};

export default TodoProvider;
