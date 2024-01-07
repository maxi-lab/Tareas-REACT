import { DeleteTask } from "./DeleteTask";
import { TaskContext } from "./Context/TaskContext";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { EditTask } from "./EditTask";
import { CompleteTask } from "./CompleteTask";
export function TaskList(){
    const {tasks}=useContext(TaskContext);

    if (tasks.length===0) {
        return (<><Fade><div className="text-white font-bold text-center "><Fade cascade duration={100} >No hay tareas aun</Fade></div></Fade></>);
    }
    return(
        <>
            <div className="grid grid-cols-3 gap-2 p-4 ">
            {tasks.map((task)=><Fade direction="up" triggerOnce  key={task.id} ><div  className="bg-gray-800 text-white rounded-lg"><h1 className="text-xl font-bold p-2">Tarea: {task.completa?task.titulo+' (completa)':task.titulo}</h1>
            <h2 className="p-2">Descripcion: {task.description}</h2>
            <DeleteTask task={task}/>
            <EditTask task={task}/>
            {!task.completa?<CompleteTask task={task}/>:''}
            </div></Fade>)}
            </div>
        </>
    );
}