import { useRef } from "react";
import { useEffect } from "react";


const TaskItem = ({index, todo, doneHandler, delHandler, startEdit, editingTodoId, editingTodoTitle, setEditingTodoTitle,}) => {
  const checkRef = useRef();
  useEffect(() => {
    editingTodoId === null;
  }, []);
  
  return (
    <li
      key={index}
      className="flex justify-between items-center p-2 mb-2  border pl-[30px] rounded-[10px] bg-white"
    >
      <input
        type="checkbox"
        className="w-5 h-5 text-green-500"
        ref={checkRef}
        onChange={() => doneHandler(todo.id)}
      />

      {editingTodoId === todo.id ? (
        <div className="flex items-center">
          <input
            type="text"
            value={editingTodoTitle}
            onChange={(e) => setEditingTodoTitle(e.target.value)}
            className="w-full p-1 border-b text-lg"
          />
          <div className="flex space-x-2">

          <button
  onClick={() => {
    const updatedTodos = todos.map((todoItem) =>
      todoItem.id === editingTodoId
        ? { ...todoItem, title: editingTodoTitle }
        : todoItem
    );

    setTodos(updatedTodos);
    setEditingTodoId(null);
    setEditingTodoTitle("");
  }}
  className="py-1 px-3 text-sm bg-green-500 text-white rounded hover:bg-green-600"
>
  Save
</button>


          <button
            onClick={() => {
              setEditingTodoId(null);
              setEditingTodoTitle(todo.title);
            }}
             className="py-1 px-3 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          </div>
        </div>
      ) : (
        <>
          <span className="text-lg">{todo.title}</span>
          <div className="space-x-2">
            <button
              onClick={() => startEdit(todo)}
              className="py-1 px-3 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              🖊️
            </button>

            <button
              onClick={() => delHandler(todo.id)}
              className="py-1 px-3 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              X
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
