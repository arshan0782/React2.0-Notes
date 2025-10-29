import React, { useContext, useState } from "react";
import { TodoDataContext } from "../context/TodoContext";


const TodoForm = () => {
  const [task, setTask] = useState("");
   const {addTodo} = useContext(TodoDataContext)

   const handleSubmit = (e)=>{
           e.preventDefault();
            if(task.trim() !==""){
                addTodo(task)
                setTask("")
            }
          }
  return (
     <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
      />
      <button  className="add-btn">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
