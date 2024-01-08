import { useState, useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
import { Fade } from "react-awesome-reveal";
export function TaskForm(){
  
  const [valid,setValid]=useState(true);
  const { createTask,title,setTitle,description,setDescription,edit,setEdit }=useContext(TaskContext);
  const handeleSubmit=(e)=>{
    e.preventDefault();
    if (title!==""&&description!==""){
      createTask(title,description);
      setTitle("");
      setDescription("");
      setValid(true);
      
    }else{
      setValid(false);
    }
    
  }
  
  return (<>
            <div className="max-w-md mx-auto ">
            <Fade cascade delay={500} triggerOnce><form onSubmit={handeleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
                <h1 className="text-2xl font-bold text-white mb-3">Crea una tarea</h1>
                <input placeholder="Escribe tu tarea" className="bg-slate-300 p-3 w-full mb-2 rounded-md" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <textarea placeholder="Escribe la descripcion" className="bg-slate-300 p-3 w-full mb-2 rounded-md" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <div className="p-2 text-red-300">{ valid ?'':<Fade direction="down">Se requiere un titulo y una descripcion para creacion de la tarea</Fade>}</div>
                <button className="bg-indigo-600 hover:bg-indigo-400 px-3 py-1 rounded-lg text-white">
                    Guardar
                </button>
            </form>
            </Fade>
            </div>
            </>);
}