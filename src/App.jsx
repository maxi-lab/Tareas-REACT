import { TaskList } from './TaskList'
import { TaskForm } from './TaskForm';
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