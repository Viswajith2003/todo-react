import React, { useEffect, useRef, useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const inputRef = useRef();

  const addItems = () => {
    if (text !== "") {
      setTodos([...todos, { list: text, id: Date.now(), status: false }]);
      console.log(todos);
      setText("");
    }
    if(editId){
      const editTodo=todos.find((todo) => todo.id === editId)
      const updateTodo=todos.map((to)=> to.id === editTodo.id ? {...to, list: text} : to)
      setTodos(updateTodo)
      setEditId(0)
      setText('')
    }
  };

  const hangleForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  const onDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const onEdit = (id) => {
    let edit = todos.find((item) => item.id === id);
    setText(edit.list);
    setEditId(edit.id);
  };

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
            {editId ? "EDIT" : "ADD"}
          </button>
        </form>

        <div className="space-y-3">
          <ul className="">
            {todos.map((item) => (
              <li
                key={item.id}
                className="text-lg mt-3 px-5 rounded-lg py-2 text-amber-300 bg-black flex justify-between"
              >
                {item.list}
                <span className="flex gap-3 pt-1">
                  <IoMdDoneAll
                    className="text-green-400"
                    id="complete"
                    title="Complete"
                  />
                  <FiEdit
                    onClick={() => onEdit(item.id)}
                    className="text-blue-400"
                    id="edit"
                    title="Edit"
                  />
                  <MdDelete
                    className="text-red-500"
                    id="delete"
                    title="Delete"
                    onClick={() => onDelete(item.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
