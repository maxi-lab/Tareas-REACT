import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function DeleteTask({task}){
    const {eliminar}=useContext(TaskContext)
    return (<button className="bg-red-500 hover:bg-red-400" onClick={()=>eliminar(task.id)}>Eliminar</button>);
}