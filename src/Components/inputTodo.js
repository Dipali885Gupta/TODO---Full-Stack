import React, { Fragment, useState, useEffect } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  // const [todos, setTodos] = useState([]);


//showing all the data present in db

  // const fetchTodos = async () => {
  //   // e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5001/todos");
  //     const jsonData = await response.json();
  //     setTodos(jsonData);
  //     console.log("input todo ",jsonData)
  //   } 
    
  //   catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, []);

  
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        
      });
       console.log("response for submitting form",response)

      if (response.ok) {
        const jsonResponse = await response.json();
        // setTodos([...todos, jsonResponse]); // Update state with the new todo
        setDescription(""); // Reset the input field
        
      } 
      
      else {
        const errorData = await response.json();
        console.error("Failed to add todo, server responded with:", errorData);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  console.log(description);
  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <button className="btn btn-success">Add</button>
      </form>
      {/* <ul className="list-group mt-5">
        {todos.map((todo) => (
          <li key={todo.todo_id} className="list-group-item">
            {todo.description}
          </li>
        ))}
      </ul> */}
    </Fragment>
  );
};

export default InputTodo;
