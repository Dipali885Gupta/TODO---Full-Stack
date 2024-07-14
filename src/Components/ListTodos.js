import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";
const ListTodos = () => {
  //chat
  const [todos, setTodos] = useState([]);

  ///deleting todo function
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5001/todo/${id}`, {
        method: 'DELETE'
      });
      console.log("deleted todos", deleteTodo)
      //
      if (deleteTodo.ok) {
        // Remove the deleted todo from state
        setTodos(todos.filter(todo => todo.todo_id !== id));
        console.log(`Todo with id ${id} deleted successfully`);
      } else {
        console.error('Failed to delete todo');
      }
    }
    catch (err) {
      console.error("catching errors", err.message);

    }
  }
  //editing todos

  //getting todos
  const getTodos = async () => {
    try {
      console.log("inside get todos");

      console.log("the todos", todos);
      const response = await fetch("http://localhost:5001/todos");
      console.log("nobb u", response);
      const jsonData = await response.json();
      setTodos(jsonData);
      console.log("getting json response", jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log("the todos", todos);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {
          <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>} */}
          {todos.map((todo) => (
            <>
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td><EditTodo todo = {todo}/> </td>
                <td>
                  <button className="btn btn-danger"
                    onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;




