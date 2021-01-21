import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  // state stuff
  //  variable(data)    function
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilterTodos] = useState([]);

  // Run Once when the page loads!
  useEffect(() => {
    getLocalTodos();
  }, []);

  // use Effect 
  useEffect(() => {
    filterHandler();
    console.log("hello!")
  }, [todos, status]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  // save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));

  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("todos", JSON.stringify(todos));
      console.log(data)
      // setTodos(todoLocal);
    }

  };
  return (
    <div className="App">
      <header>
        <h1>
          Mike's To-Do List
        </h1>

      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
