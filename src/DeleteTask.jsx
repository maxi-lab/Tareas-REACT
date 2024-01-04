export function DeleteTask({task,eliminar}){
    
    
    return (<button onClick={()=>eliminar(task.id)}>Eliminar</button>);
}