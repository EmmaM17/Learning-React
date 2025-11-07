import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

function Home() {
  let moods = ['Scary', 'Happy', 'Romantic', 'Thrilling', 'Sad'];
  return (
    <div className="parent">
      <title>Movie Suggestions</title>

      <div className="header">
        <h1>Movie Suggestions</h1>
       </div> {/* End of header class*/}

      <div className= "quiz">
        <div className='form'>
          <h2>Choose the mood</h2>
          <ul>{moods.map((mood) => <li>{ mood }</li>)}</ul>
        </div>
      </div> {/* End of quiz class*/}


    </div> /* End of parent class */
  );
}

export default Home;

