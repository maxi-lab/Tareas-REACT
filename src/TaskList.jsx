import { DeleteTask } from "./DeleteTask";

export function TaskList({ tasks, eliminar }){
    

    if (tasks.length===0) {
        return (<><h1>No hay tareas aun</h1></>);
    }
    return(
        <>
            {tasks.map((task)=><div key={task.id}><h1>Tarea: {task.titulo}</h1>
            <h2>Descripcion: {task.description}</h2>
            <DeleteTask task={task} eliminar={eliminar}/>
            </div>)}
        </>
    );
}