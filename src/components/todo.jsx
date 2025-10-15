import React, { useEffect, useRef, useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const inputRef=useRef();

  const addItems = () => {
    setTodos([...todos, text]);
    console.log(todos);
    setText("");
  };

  const hangleForm = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
    inputRef.current.focus();
  })

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-blue-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          TODO APP
        </h1>

        <form className="flex gap-3 mb-6" onSubmit={hangleForm}>
          <input
            onChange={(e) => {
              setText(e.target.value);
            }}
            ref={inputRef}
            value={text}
            type="text"
            placeholder="Enter your todo"
            className="flex-1 px-4 py-3 rounded-lg ring-2 focus:ring-teal-400 bg-white"
          />
          <button
            onClick={addItems}
            className="bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-950 transition-colors border border-teal-600 "
          >
            ADD
          </button>
        </form>

        <div className="space-y-3">
          <ul className="">
            {todos.map((item) => (
              <li
                key={item.id}
                className="text-lg mt-3 px-5 rounded-lg py-2 text-amber-300 bg-black"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
