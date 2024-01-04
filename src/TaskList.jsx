export function TaskList({tasks}){
    

    if (tasks.length===0) {
        return (<><h1>No hay tareas aun</h1></>);
    }
    return(
        <>
            {tasks.map((task)=><div key={task.id}>Tarea:{task.titulo}</div>)}
        </>
    );
}