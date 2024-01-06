import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function DeleteTask({task}){
    const {eliminar}=useContext(TaskContext)
    return (<div className="p-2"><button className="bg-red-600 hover:bg-red-400 rounded-lg mb-4 p-2 " onClick={()=>eliminar(task.id)}>Eliminar</button></div>);
}