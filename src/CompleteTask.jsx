import { useContext } from "react";
import { TaskContext } from "./Context/TaskContext";
export function CompleteTask ({task}) {
    const {completar}=useContext(TaskContext);
    return(
        <div className="p-2"><button className="bg-green-600 hover:bg-green-400 rounded-lg mb-4 p-2 " onClick={()=>completar(task.id)}>Completar</button></div>
    );
}