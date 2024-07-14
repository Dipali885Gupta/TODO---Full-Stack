import React, { Fragment } from "react";
import "./App.css";
import InputTodo from "./Components/inputTodo";
import ListTodos from "./Components/ListTodos";
//import EditTodo from "./Components/EditTodo";
//components
function App() {
  return (
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  );
}

export default App;
