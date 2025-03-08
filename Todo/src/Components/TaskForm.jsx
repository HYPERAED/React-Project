import React, { useState } from "react";
import { useRef } from "react";

const TaskForm = ({ error, value, submit, onChange, searchValue, onSearchChange, deletAll }) => {
  const [filter,setFilter] = useState("All");
  const addRef = useRef();
  const focus = () =>{ addRef.current.focus();}
  return (
    <form onSubmit={submit} className="w-full no-underline">

      <div className="flex-col space-y-5 items-center">

        <div className="flex space-x-4"> 
          <input
            type="text"
            className=" border rounded-[10px] w-4/12 bg-transparent  border-gray-400 focus:outline-none focus:border-blue-500 text-lg p-1"
            placeholder="🔍Search tasks..."
            value={searchValue}
            onChange={onSearchChange}
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border  rounded-[10px] w-4/12 bg-transparent  border-gray-400 focus:outline-none">

            <option value="All"> 📝All Tasks</option>
            <option value="Completed">✅Completed</option>
            <option value="Pending">⏳Pending</option>
          </select>

          <button
            type="submit"
            onClick={deletAll}
            className=" w-3/12 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
          >
            🗑️Clear All
          </button>

          
          
        </div>

      
        <div className=" flex justify-between pr-2">
          <input
            type="text"
            className=" border  rounded-[10px]  w-8/12 bg-transparent  border-gray-400 focus:outline-none focus:border-blue-500 text-lg p-1"
            placeholder="What needs to be done?"
            required
            value={value}
            onChange={onChange}
            ref={addRef}
          />


          {error && <small className="text-red-500">{error}</small>}

          <button
            type="submit"
            className=" w-3/12 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
            onClick={focus}
          >
            Add Task
          </button>
        </div>

        
      </div>
    </form>
  );
};

export default TaskForm;
