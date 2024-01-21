import { TaskContext } from "./Context/TaskContext";
import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { ActionButton } from "./ActionButton";

export function TaskList(){
    const {tasks, eliminar, modificar, completar}=useContext(TaskContext);

    if (tasks.length===0) {
        return (<><Fade><div className="text-white font-bold text-center "><Fade cascade duration={100} >No hay tareas aun</Fade></div></Fade></>);
    }
    return(
        <>
            <div className="grid grid-cols-3 gap-2 p-4 ">
            {tasks.map((task)=><Fade direction="up" triggerOnce  key={task.id} ><div  className="bg-gray-800 text-white rounded-lg"><h1 className="text-xl font-bold p-2">Tarea: {task.completada?task.titulo+' (completa)':task.titulo}</h1>
            <h2 className="p-2">Descripcion: {task.description}</h2>
            <ActionButton text='Eliminar' task={task} action={eliminar} color='bg-red-600 hover:bg-red-400 rounded-lg mb-4 p-2'></ActionButton>
            <ActionButton text="Modificar" task={task} action={modificar} color="bg-blue-600 hover:bg-blue-400 rounded-lg mb-4 p-2"/>
            {!task.completada?<ActionButton text='Completar' action={completar} color="bg-green-600 hover:bg-green-400 rounded-lg mb-4 p-2" task={task}/>:''}
            </div></Fade>)}
            </div>
        </>
    );
}