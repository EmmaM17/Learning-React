import './myStyle.css';
import { useState } from 'react';

function inputList() {
  const [taskName, setName] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, name: 'Test program' }, { id: 2, name: 'Fix bugs' }]);
  let nextId = 0;

  return(
    <>
      <h1>My To Do List</h1>

      <input
        value={taskName}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={() => {
        setTasks([
          ...tasks,
          { id: nextId++, name: taskName }
        ]);
      }}>Add</button>
      <ul>
        {tasks.map(tasks => (
          <li key={tasks.id}>{tasks.name}</li>
        ))}
      </ul>
      
    </>
  );
}



export default inputList;