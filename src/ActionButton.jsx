
export function ActionButton({task,action,color,text}){
    return (
        <div className="p-2"><button className={color} onClick={()=>action(task.id)}>{text}</button></div>
    )
}