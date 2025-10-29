import React, { useContext } from "react";
import  { TodoDataContext } from '../context/TodoContext'
const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoDataContext);

  return (
      <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-task">No tasks yet</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
