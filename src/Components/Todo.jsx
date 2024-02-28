import React, { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(""); 

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo(""); // Clear the input field
    }
  };

  const handleChange = (e) => {
    const newTodo = e.target.value;
    setTodo(newTodo);
    console.log(newTodo);
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ background: "linear-gradient(to right, #009fff, #ec2f4b)" }}
    >
      <div className="flex p-4 flex-col items-center justify-center rounded bg-[#462d38]">
        <h1 className="text-3xl text-white text-center mr-8 mb-7">
          Todo list app
        </h1>
        <div className="flex gap-2">
          <input
            className="bg-gray-200 w-60 p-2 rounded"
            type="text"
            placeholder="Add Todo"
            onChange={handleChange}
            value={todo}
          />
          <button
            className="ml-2 border-1 bg-green-300 px-2 rounded-lg"
            onClick={addTodo}
          >
            Add
          </button>
        </div>
        <div
          className="mt-4 flex   flex-col justify-between h-[400px]"
          style={{ width: "300px", maxHeight: "300px", overflowY: "auto" }}
        >
          {todos.map((item, index) => (
            <p key={index} className=" bg-slate-500 p-2 ">
                <div>

              {item}
                </div>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
