import { createContext } from "react";
const TaskContext=createContext();
export function TaskContextProvaider(props){
    return (<>
        
        <TaskContext.Provider>
        {props.children}
        </TaskContext.Provider>
        </>);
}