import { createContext, useState, useEffect } from "react";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    const [idT,setIdT]=useState(0);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    function createTask(taskTitle, taskDescription) {
      setIdT(idT+1);
      setTasks([...tasks,{
        id:idT,
        titulo:taskTitle,
        description:taskDescription
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

            
        }}>
        {props.children}
        </TaskContext.Provider>
        </>);
}