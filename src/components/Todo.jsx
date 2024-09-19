import { useEffect, useState } from "react"
import TodoItem from "./TodoItem"

const Todo = () => {
    const [todoData,setTodoData] = useState([])
    useEffect(()=>{
        getTodosData()
    
    },[])

    const getTodosData = async () =>{
        const data = await fetch("https://todo-backend-1-7ct0.onrender.com/");
        const json = await data.json()
        setTodoData(json);
       
    }

    const getTodoId = (index) =>{
        console.log(index)
        const options ={
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            }
        }

        fetch(`https://todo-backend-1-7ct0.onrender.com/todos/${index}/`,options)
       
    }

  return (
    <div className="bg-slate-50 text-[10px] font-sans m-2 p-2 flex flex-wrap justify-center self-center">
        {
            todoData.map((todo) =>(
                <TodoItem key={todo.todo_id} eachTodo={todo}
                getTodoId={getTodoId}/>
            ))
        }

    </div>
  )
}

export default Todo