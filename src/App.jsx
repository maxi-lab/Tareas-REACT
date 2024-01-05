import { TaskList } from './TaskList'
import { TaskForm } from './TaskForm';
import { tareas } from "./tasks";
import { useState, useEffect } from 'react';
import { TaskContext } from './Context/TaskContext';
export  function App() {
  
  return (<>
            <main className='bg-zinc-900 h-screen'>
                  <div className='container mx-auto p-10'>
                        <TaskForm />
                        <TaskList  />
                  </div>
            
            </main>
            
      </>);
}