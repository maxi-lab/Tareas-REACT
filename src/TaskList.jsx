import { DeleteTask } from "./DeleteTask";
import { TaskContext } from "./Context/TaskContext";
import { useContext } from "react";

export function TaskList(){
    const {tasks}=useContext(TaskContext);

    if (tasks.length===0) {
        return (<><div className="text-white font-bold text-center ">No hay tareas aun</div></>);
    }
    return(
        <>
            <div className="grid grid-cols-3 gap-2 p-4 ">
            {tasks.map((task)=><div key={task.id} className="bg-gray-800 text-white rounded-lg"><h1 className="text-xl font-bold p-2">Tarea: {task.titulo}</h1>
            <h2 className="p-2">Descripcion: {task.description}</h2>
            <DeleteTask task={task}/>
            </div>)}
            </div>
        </>
    );
}