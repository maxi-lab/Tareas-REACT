import { createContext, useState, useEffect } from "react";
import { tareas } from "../tasks";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    
    useEffect(()=>{
      setTasks(tareas)
      },[]) //La conexion a la API
  function createTask(taskTitle, taskDescription) {
      const data={
        titulo:taskTitle,
        description:taskDescription,
        completada:false,
      };
        setTasks([...tasks,data]);
    }
  function eliminar(id){
    setTasks(()=>tasks.filter(task=>task.id!==id))
  }
  function modificar(id) {
      
      function data(){
        for (let i = 0; i < tasks.length; i++) {
          if(tasks[i].id===id&&(title!==''||description!=='')){
            if (title===''){
              return {...tasks[i],description:description};
            }
            if (description===''){
              return {...tasks[i],titulo:title};
            }
            return {...tasks[i],titulo:title,description:description};
          }
        }
      }
      setTasks((prevTasks)=>{return prevTasks.map(t=>{
        if(t.id===id&&(title!==''||description!=='')){
          if (title===''){
            return {...t,description:description};
          }
          if (description===''){
            return {...t,titulo:title};
          }
          return {...t,titulo:title,description:description};
        }
        return t;
      })})
      setDescription('');
      setTitle(''); 
  }
  function completar(id){
    
    function data() {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id===id) {
          return {... tasks[i],completada:!tasks[i].completada}
        }
      }
    }
    setTasks((prevTasks)=>{return prevTasks.map(t=>{
      if(t.id===id){
        return {...t,completada:!t.completada};
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