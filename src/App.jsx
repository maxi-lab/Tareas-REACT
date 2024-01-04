import { TaskList } from './TaskList'
import { TaskForm } from './TaskForm';
import { tareas } from "./tasks";
import { useState, useEffect } from 'react';
export  function App() {
  const [tasks,setTasks]=useState([]);
  useEffect(()=>{
        setTasks(tareas)
    }, []);//no me pasa, pero si llego tener un conflicto de componentes con la instruccion 'as' puedo darle un alias al mismo, ejempo: import { tasks as data } from "./tasks";
  function createTask(taskTitle, taskDescription) {
      setTasks([...tasks,{
        id:tasks.length+1,
        titulo:taskTitle,
        description:taskDescription
      }]);
    }
  return (<>
        <TaskForm createTask={createTask}/>
        <TaskList tasks={tasks}/>
      </>);
}