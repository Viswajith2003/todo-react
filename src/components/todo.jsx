import React, { useEffect, useRef, useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Moon, Sun } from "lucide-react";
import useTheme from "../Hooks/UseTheme";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const [theme, toggleTheme] = useTheme();
  const inputRef = useRef();

  const addItems = () => {
    if (text !== "") {
      setTodos([...todos, { list: text, id: Date.now(), status: false }]);
      setText("");
    } else if (editId) {
      const editTodo = todos.find((todo) => todo.id === editId);
      const updateTodo = todos.map((to) =>
        to.id === editTodo.id ? { ...to, list: text } : to
      );
      setTodos(updateTodo);
      setEditId(0);
      setText("");
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [editId]);

  const onDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const onEdit = (id) => {
    let edit = todos.find((item) => item.id === id);
    setText(edit.list);
    setEditId(edit.id);
  };

  const onComplete = (id) => {
    let complete = todos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodos(complete);
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      } flex items-center justify-center p-4`}
    >
      <div className="relative w-full max-w-md">
        
        <button
          onClick={toggleTheme}
          className={`absolute -top-16 right-0 p-3 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-white text-gray-800 hover:bg-gray-200 shadow-md"
          }`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        <div
          className={`rounded-2xl p-8 shadow-2xl transition-colors duration-300 ${
            isDark ? "bg-blue-900" : "bg-blue-700"
          }`}
        >
          <h1
            className={`text-4xl font-bold text-center mb-8 transition-colors duration-300 ${
              isDark ? "text-blue-100" : "text-white"
            }`}
          >
            TODO APP
          </h1>

          <form className="flex gap-3 mb-6" onSubmit={handleForm}>
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              ref={inputRef}
              value={text}
              type="text"
              placeholder="Enter your todo"
              className={`flex-1 px-4 py-3 rounded-lg ring-2 focus:ring-teal-400 transition-colors duration-300 ${
                isDark
                  ? "bg-gray-800 text-white placeholder-gray-400"
                  : "bg-white text-black placeholder-gray-500"
              }`}
            />
            <button
              onClick={addItems}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border ${
                isDark
                  ? "bg-teal-800 text-white hover:bg-teal-700 border-teal-600"
                  : "bg-teal-900 text-white hover:bg-teal-950 border-teal-600"
              }`}
            >
              {editId ? "EDIT" : "ADD"}
            </button>
          </form>

          <div className="space-y-3">
            <ul>
              {todos.map((item) => (
                <div
                  key={item.id}
                  className={`text-lg mt-3 px-5 rounded-lg py-2 transition-all duration-300 ${
                    isDark
                      ? "bg-gray-800 text-amber-300"
                      : "bg-black text-amber-300"
                  } ${item.status ? "opacity-40 line-through" : ""}`}
                >
                  <li className="flex justify-between items-center">
                    <span>{item.list}</span>
                    <span className="flex gap-3 pt-1">
                      <IoMdDoneAll
                        onClick={() => onComplete(item.id)}
                        className="text-green-400 cursor-pointer hover:text-green-300 transition-colors"
                        title="Complete"
                      />
                      <FiEdit
                        onClick={() => onEdit(item.id)}
                        className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
                        title="Edit"
                      />
                      <MdDelete
                        className="text-red-500 cursor-pointer hover:text-red-400 transition-colors"
                        title="Delete"
                        onClick={() => onDelete(item.id)}
                      />
                    </span>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
