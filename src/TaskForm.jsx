import { useState } from "react";
export function TaskForm({createTask}){
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
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