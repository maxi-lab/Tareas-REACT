import { createContext, useState, useEffect } from "react";
import { tareas } from "../tasks";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    const [idT,setIdT]=useState(0);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    
    useEffect(()=>{
      setTasks(()=>tareas);
      setIdT(()=>tareas[tareas.length -1].id+1);
    },[]) //Simula una conexion de un sistema externo (los docs recomiendan que sean así) 
  function createTask(taskTitle, taskDescription) {
      setTasks([...tasks,{
        id:idT,
        titulo:taskTitle,
        description:taskDescription,
        completa:false,
      }]);
      setIdT(prevIdT=>prevIdT+1);// esto es para que no se sobreescriva en una misma ejecucion (es mejor de lo que hacia antes, que eso se puede hacer, pero los docs lo recomiendan asi)
    }
  function eliminar(id){
    setTasks(()=>tasks.filter(task=>task.id!==id));
  }
  function modificar(id) {
      const task=tasks.find(t=>t.id===id);
      eliminar(id)
      setTitle(task.titulo);
      setDescription(task.description);
  }
  function completar(id){
    setTasks((prevTasks)=>{return prevTasks.map(t=>{
      if(t.id===id){
        return {...t,completa:!t.completa};
      }
      return t;
    })})
    
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