import { tareas } from "./tasks";
import { useState, useEffect } from "react";

export function TaskList(){
    const [tasks,setTasks]=useState([]);
    useEffect(()=>{
        setTasks(tareas)
    }, []);//no me pasa, pero si llego tener un conflicto de componentes con la instruccion 'as' puedo darle un alias al mismo, ejempo: import { tasks as data } from "./tasks";

    if (tasks.length===0) {
        return (<><h1>No hay tareas aun</h1></>);
    }
    return(
        <>
            {tasks.map((task)=><div key={task.id}>{task.titulo}</div>)}
        </>
    );
}