import { createContext, useState, useEffect } from "react";
import { tareas } from "../tasks";
import { data } from "autoprefixer";
export const TaskContext=createContext();
export function TaskContextProvaider(props){
    const [tasks,setTasks]=useState([]);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    
    useEffect(()=>{
      fetch('http://127.0.0.1:8000/api/tarea/')
        .then((response)=>response.json())
        .then((data)=>setTasks(data));
        
      },[]) //La conexion a la API
  function createTask(taskTitle, taskDescription) {
      const data={

        titulo:taskTitle,
        description:taskDescription,
        completada:false,
      };
      console.log(data);
      try {
        fetch("http://127.0.0.1:8000/api/tarea/",{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(data),
        })
        .then((response)=>response.json())
        .then((data)=>{
          setTasks([...tasks,data]);
        });
      } catch (error) {
        console.error(error);
      }
    }
  function eliminar(id){
    try {
      fetch(`http://127.0.0.1:8000/api/tarea/${id}/`,{
        method:'DELETE',
      })
      .then((response)=>response.ok?setTasks(()=>tasks.filter(task=>task.id!==id)):console.error('error: ',response.statusText));
    } catch (error) {
      console.error(error);
    }
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
      try {
        fetch(`http://127.0.0.1:8000/api/tarea/${id}/`,{
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data())
        })
        .then((response)=>response.json())
        .then(()=>{
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
        })
        .catch((error)=>console.error(error))
      } catch (error) {
        console.error(error);
      }
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
    console.log(data());
    try {
      fetch(`http://127.0.0.1:8000/api/tarea/${id}/`,{
        method:'PATCH',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data()),
      })
      .then((response)=>response.json())
      .then(()=>{
        setTasks((prevTasks)=>{return prevTasks.map(t=>{
          if(t.id===id){
            return {...t,completada:!t.completada};
          }
          return t;
        })})
      })
    } catch (error) {
      console.error(error);
    }
    
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