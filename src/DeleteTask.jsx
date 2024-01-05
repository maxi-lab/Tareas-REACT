import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function DeleteTask({task}){
    const {eliminar}=useContext(TaskContext)
    return (<button onClick={()=>eliminar(task.id)}>Eliminar</button>);
}