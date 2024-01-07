import { createContext, useState, useEffect } from "react";
import { tareas } from "../tasks";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    const [idT,setIdT]=useState(0);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    
    useEffect(()=>{
      setTasks(tareas);
      setIdT(tareas[tareas.length -1].id+1);//no tiene sentido ya que sin el '+1' se carga en '2' pero setIdT(idT+1)tendria que ser 3
    },[]) //Simula una conexion de un sistema externo 
  function createTask(taskTitle, taskDescription) {
      setIdT(idT+1);
      setTasks([...tasks,{
        id:idT,
        titulo:taskTitle,
        description:taskDescription,
        completa:false,
      }]);
    }
  function eliminar(id){
    setTasks(tasks.filter(task=>task.id!==id));
  }
  function modificar(id) {
      const task=tasks.find(t=>t.id===id);
      eliminar(id)
      setTitle(task.titulo);
      setDescription(task.description);
  }
  function completar(id){
    const task=tasks.find(t=>t.id===id);
    task.completa=true;
  }
    return (<>
        
        <TaskContext.Provider value={{
            tasks:tasks,
            eliminar:eliminar,
            createTask:createTask,
            title:title,
            description:description,
            setTitle:setTitle,
            setDescription:setDescription,
            modificar:modificar,
            completar:completar,

            
        }}>
        {props.children}
        </TaskContext.Provider>
        </>);
}