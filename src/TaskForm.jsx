import { useState, useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function TaskForm(){
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const { createTask }=useContext(TaskContext);
  const handeleSubmit=(e)=>{
    e.preventDefault();
    createTask(title,description);
    setTitle("");
    setDescription("");
  }
  
  return (<>
            <form onSubmit={handeleSubmit}>
                <input placeholder="Escribe tu tarea" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea placeholder="Escribe la descripcion" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <button>
                    Guardar
                </button>
            </form>
            </>);
}