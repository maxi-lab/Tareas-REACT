import { useState } from "react";
export function TaskForm({createTask}){
  
  const [title,setTitle]=useState("");
  const handeleSubmit=(e)=>{
    e.preventDefault();
    const newTask={
        id:3,
        titulo:title, //cuidado con los nombres salame
        description:'bob',
    }
    createTask(newTask);

  }
  
  return (<>
            <form onSubmit={handeleSubmit}>
                <input placeholder="Escribe tu tarea" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button>
                    Guardar
                </button>
            </form>
            </>);
}