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
            <div className="max-w-md mx-auto">
            <form onSubmit={handeleSubmit} className="bg-slate-800 p-10 mb-4">
                <h1 className="text-2xl font-bold text-white mb-3">Crea la tarea</h1>
                <input placeholder="Escribe tu tarea" className="bg-slate-300 p-3 w-full mb-2" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea placeholder="Escribe la descripcion" className="bg-slate-300 p-3 w-full mb-2" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                
                <button className="bg-indigo-500 px-3 py-1 text-white">
                    Guardar
                </button>
            </form>
            </div>
            
            </>);
}