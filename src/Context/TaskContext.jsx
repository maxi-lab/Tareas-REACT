import { createContext, useState, useEffect } from "react";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    function createTask(taskTitle, taskDescription) {
      setTasks([...tasks,{
        id:tasks.length+1,
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