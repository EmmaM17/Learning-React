/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './scripts/HelloWorld.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
) */

import { createRoot } from 'react-dom/client'
/* createRoot(document.getElementById('root')).render(
  <h1>Hello React!</h1>
)   */

/* createRoot(document.getElementById('root')).render(
  <p>Welcome!</p>
)  */

const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')).render(
  myelement
)
