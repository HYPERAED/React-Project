import React from "react";
import TaskItem from "./TaskItem"

const TaskList = ({ todos, delHandler, doneHandler ,startEdit, editingTodoId, editingTodoTitle, setEditingTodoTitle }) => {
  return (
    <div className=" mt-10">
      {todos.length === 0 ? (
        <div className="text-center bg-gray-100 p-6 rounded-lg shadow">
          <img
            src="https://us.123rf.com/450wm/alekseyvanin/alekseyvanin1912/alekseyvanin191201076/135447496-document-papier-ic%C3%B4ne-de-vecteur-de-formulaire-signe-plat-rempli-pour-le-concept-mobile-et-la.jpg?ver=6"
            className="h-[80px] w-[80px] justify-center items-center"
            alt="list"
          />
          <h4 className="text-lg text-gray-700">
            No tasks Found. Add some tasks to get started!
          </h4>
        </div>
      ) : (
        <ul className="max-h-[400px] overflow-y-auto space-y-2 flex flex-col mt-3">
        {todos.map((todo, index) => (
          <TaskItem
            key={todo.id} 
            todo={todo}
            doneHandler={doneHandler}
            delHandler={delHandler}
            startEdit={startEdit}
            editingTodoId={editingTodoId}
            editingTodoTitle={editingTodoTitle}
            setEditingTodoTitle={setEditingTodoTitle}
          />
        ))}
      </ul>
      )}
    </div>
  );
};

export default TaskList;
