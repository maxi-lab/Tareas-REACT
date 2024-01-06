import { useState, useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function TaskForm(){
  
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [valid,setValid]=useState(true);
  const { createTask }=useContext(TaskContext);
  const handeleSubmit=(e)=>{
    e.preventDefault();
    if (title!==""&&description!==""){
      createTask(title,description);
      setTitle("");
      setDescription("");
      !valid?setValid(true):'';
    }else{
      setValid(false);
    }
    
  }
  
  return (<>
            <div className="max-w-md mx-auto ">
            <form onSubmit={handeleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
                <h1 className="text-2xl font-bold text-white mb-3">Crea una tarea</h1>
                <input placeholder="Escribe tu tarea" className="bg-slate-300 p-3 w-full mb-2 rounded-md" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea placeholder="Escribe la descripcion" className="bg-slate-300 p-3 w-full mb-2 rounded-md" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <div className="p-2 text-red-300">{ valid ?'':'Se requiere un titulo y una descripcion'}</div>
                <button className="bg-indigo-600 hover:bg-indigo-400 px-3 py-1 rounded-lg text-white">
                    Guardar
                </button>
            </form>   
            
            </div>
            
            </>);
}