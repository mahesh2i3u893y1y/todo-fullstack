/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import EditPopup from "../utilities/EditPopup";

let colours = {
  0:"#a93226",
  1: "#FFCDD2",
  2:"#81C784",
  3:"#EF5350",
  4:"#BA68C8",
  5:"#80DEEA",
  6:"#FFA726",
  7:"#29F3FF",
  8:"#ff9933",
  9:"#990000",
  10:"#809fff",
  11:"#17d17d",
  12:"#C70039",
  13:"#d1b817",
  14:"#8517d1",
  15:"#d117b2",
  16:"#DAF7A6",
  17:"#99d7da", 
  18:"#6c3483",
  19:"#9c640c",
  20:"#ec7063"
}

const TodoItem = (props) => {
    const {eachTodo,getTodoId} = props
    const {title,text,todo_id} = eachTodo
    const [modal,setModal] = useState(false)
   

    const generateRandomcolor = () =>{
      const num = Math.round(Math.random() * 19)
      return num
      
    }
    const color = generateRandomcolor()
    


  const deleteTodo = () =>{
    getTodoId(todo_id)
  }  

  const toggle = () =>{
    setModal(!modal)
  }

  const editTodoId = (id,title,text,status) =>{
    let data = {
      title,
      text,
      status
  }

  let options = {
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
      },
      body:JSON.stringify(data)
  }

  fetch(`https://todo-backend-1-7ct0.onrender.com/todos/${id}/`,options)

  }


  return (
    <div className="shadow-lg rounded-lg w-40 m-2 px-4 py-2 flex flex-col "
    style={{
      borderTop:`3px solid ${colours[color]}`
    }}>
      <div>
        <h4 className="font-semibold m-1"
        style={{
          color:`${colours[color]}`
        }}>{title}</h4>
        <p>{text}</p>
        
      </div>
      <div className="self-end mt-4">
        <button className="m-1" onClick={() =>deleteTodo()}><MdOutlineDeleteOutline className="text-[15px]" style={{color:`${colours[color]}`}}/></button>
        <button onClick={() => setModal(true)}><TiEdit className="text-[15px]" style={{color:`${colours[color]}`}}/></button>
      </div>
      <EditPopup toggle={toggle} modal={modal} todoDetails={eachTodo} getTodoId={editTodoId}/>
    </div>
  )
}

export default TodoItem