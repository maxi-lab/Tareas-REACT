
export function ActionButton({task,action,color,text}){
    return (
        <div className="p-2"><button className={'bg-'+color+'-600 hover:bg-'+color+'-400 rounded-lg mb-4 p-2'} onClick={()=>action(task.id)}>{text}</button></div>
    )
}