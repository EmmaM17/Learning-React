import './myStyle.css';
import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Counter App</h1>
      <p>This button has been pressed {count} times</p>
      <div>
        <button onClick={() => setCount(count + 1)}>Press</button>
      </div>
    </>
  );
}

export default CounterApp;
