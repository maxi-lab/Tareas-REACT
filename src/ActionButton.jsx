export function ActionButton({task,action,color='black',text='Un texto'}){
    return (
        <div className="p-2"><button className={color} onClick={()=>action(task.id)}>{text}</button></div>
    )
}