import { TaskList } from './TaskList'
import { TaskForm } from './TaskForm';
import { tareas } from "./tasks";
import { useState, useEffect } from 'react';
import { TaskContext } from './Context/TaskContext';
export  function App() {
  
  return (<>
            <TaskForm />
            <TaskList />
      </>);
}