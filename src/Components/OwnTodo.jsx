import React, { useState } from "react";

const OwnTodo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (value.trim()) {
      setTodo([...todo, value]);
      setValue("");
    }
  };

  const deleteTodo = (indexToDelete) => {
    setTodo(todo.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="flex flex-col container mx-auto h-screen p-4 mt-4">
      <h1 className="mx-auto">Todo App</h1>
      <div className="flex items-center gap-2 justify-center mt-5">
        <input
          type="text"
          placeholder="Enter the tasks"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-gray-300 p-2"
        />
        <button className="btn bg-blue-500 text-white p-2" onClick={addTodo}>
          Add Task
        </button>
      </div>

      <div className="flex flex-col items-center mt-5 space-y-2">
        {todo.map((task, index) => (
          <div key={index} className="flex items-center justify-between gap-4 w-[50vh]">
            <h1 className="text-lg text-center font-medium bg-slate-200 p-2 flex-grow">
              {task}
            </h1>
            <button 
              className="bg-red-500 rounded-2xl text-white p-2"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnTodo;
