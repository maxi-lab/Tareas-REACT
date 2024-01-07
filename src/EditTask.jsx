import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function EditTask({task}){
    const {modificar}=useContext(TaskContext);
    return(
        <div className="p-2"><button className="bg-blue-600 hover:bg-blue-400 rounded-lg mb-4 p-2 " onClick={()=>modificar(task.id)}>Modificar</button></div>
    )
}