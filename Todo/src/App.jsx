import React, { useEffect, useState } from "react";
import TaskForm from "./Components/TaskForm";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import TaskList from "./Components/TaskList";
import Footer from "./Components/Footer";

const App = () => {
  const [error, setError] = useState(null);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [editingTodoId, setEditingTodoId] = useState(null)
  const [editingTodoTitle, setEditingTodoTitle] = useState('')

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault()
    if (editingTodoId !== null) {
      const updatedTodos = todos.map((todo) =>
        todo.id === editingTodoId ? { ...todo, title: editingTodoTitle } : todo
      )
      setTodos(updatedTodos)
      setEditingTodoId(null)
      setEditingTodoTitle('')
    } else {
      setTodos([{ id: Date.now(), title: todo, done: false }, ...todos])
    }

    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
    const updatedTodos = todos.filter((item) => item.id !== todoId);
    setTodos(updatedTodos);
  };

  const delAllHandler = () => {
    setTodos([]); 
  };

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId);
    const newTodo = [...todos];
    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    };
    setTodos(newTodo);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startEdit = (todo) => {
    setEditingTodoId(todo.id) 
    setEditingTodoTitle(todo.title) 
  }
  
  

  return (
    <Layout>
      <Header />
      <TaskForm
        error={error}
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
        searchValue={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
        deletAll={delAllHandler}
      />

      <TaskList
        todos={filteredTodos}
        delHandler={delHandler}
        doneHandler={doneHandler}
        startEdit={startEdit}
        editingTodoId={editingTodoId}
        editingTodoTitle={editingTodoTitle}
        setEditingTodoTitle={setEditingTodoTitle} 
      />
      <Footer/>
    </Layout>
  );
};

export default App;
