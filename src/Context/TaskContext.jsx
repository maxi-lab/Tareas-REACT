import { createContext, useState, useEffect } from "react";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    const [idT,setIdT]=useState(0);
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
  
    return (<>
        
        <TaskContext.Provider value={{
            tasks:tasks,
            eliminar:eliminar,
            createTask:createTask,
            
        }}>
        {props.children}
        </TaskContext.Provider>
        </>);
}