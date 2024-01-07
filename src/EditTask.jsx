import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function EditTask({task}){
    const {modificar}=useContext(TaskContext);
    return(
        <button onClick={()=>modificar(task.id)}>Modificar</button>
    )
}