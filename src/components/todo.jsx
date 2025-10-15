import React from "react";

function Todo() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-blue-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h1 className="text-white text-4xl font-bold text-center mb-8">
          TODO APP
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Enter your todo"
            className="flex-1 px-4 py-3 rounded-lg ring-2 focus:ring-teal-400 "
          />
          <button className="bg-teal-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-950 transition-colors border border-teal-600 ">
            ADD
          </button>
        </div>

        <div className="space-y-3">
          <div className="bg-black text-white px-5 py-4 rounded-lg">
            <span className="text-lg">First</span>
          </div>
          <div className="bg-black text-white px-5 py-4 rounded-lg">
            <span className="text-lg">Second</span>
          </div>
          <div className="bg-black text-white px-5 py-4 rounded-lg">
            <span className="text-lg">Third</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
