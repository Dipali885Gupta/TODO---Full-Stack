import React, { Fragment, useState, useEffect } from "react";

const EditTodo = ({ todo }) => {
  console.log("the todo mapping", todo);

  const [description, setDescription] = useState(todo.description);
  //edit discription function
 const updateDescription = async(e)=>{
  e.preventDefault();
 try{
 const body ={description};
 const response= await fetch(`http://localhost:5001/todos/${todo.todo_id}`,{
 method:"PUT",
 headers: {"Content-Type": "application/json"},
 body: JSON.stringify(body)
 })
 console.log("editing",response);
  window.location = "/"
}



 catch(err){
  console.error(err.message);
 }
 }



  /////////////////////////////
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        onClick={()=> setDescription(todo.description)}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Todo
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                //when crossing the popup the previous description will come instead of this edited popup description by me
                onClick={()=> setDescription(todo.description)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
              {/* if i click on edit button i can write anything in the form  */}
              <input type="text" className="form-control" value={description} onChange={e=>setDescription(e.target.value)}/>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                // sending the data after editing
                onClick={e => updateDescription(e)}
              >
                Edit{" "}
              </button>
             {/* when  closing the popup using close buttion set as previous description */}
              <button type="button" class="btn btn-danger" data-dismiss="modal"   onClick={()=> setDescription(todo.description)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditTodo;
