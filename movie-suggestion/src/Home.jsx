import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'

function Home() {
  
  // Logic
 const [questionNum, setQuestionNum] = useState(1);

 function getQuestion() {
    if (questionNum === 1) {
      return "Choose the mood";
    }
    else if (questionNum === 2){
      return "Choose an Actor";
    }
    return "";
  }

  function getAnswer(){
    if (questionNum === 1){
      let answers = ['Scary', 'Happy', 'Romantic', 'Thrilling', 'Sad'];
      return answers;
    }
    else if(questionNum === 2){
      let answers = ['Brad Pitt', 'Timothee Chalamet', 'Bruce Willis', 'Angelina Jolie', 'Jennifer Lawrence'];
      return answers;
    }
    return[]
  }
  

  // Display
  return (
    <div className="parent">
      <title>Movie Suggestions</title>

      <div className="header">
        <h1>Movie Suggestions</h1>
       </div> {/* End of header class*/}

      <div className= "quiz">
        <div className='form'>
          <h2>{getQuestion()}</h2>
          <button className="mood" onClick={() => setQuestionNum(questionNum + 1)}>{getAnswer()[0]}</button>
          <button className="mood" onClick={() => setQuestionNum(questionNum + 1)}>{getAnswer()[1]}</button>
          <button className="mood" onClick={() => setQuestionNum(questionNum + 1)}>{getAnswer()[2]}</button>
          <button className="mood" onClick={() => setQuestionNum(questionNum + 1)}>{getAnswer()[3]}</button>
          <button className="mood" onClick={() => setQuestionNum(questionNum + 1)}>{getAnswer()[4]}</button>
        </div>
      </div> {/* End of quiz class*/}


    </div> /* End of parent class */
  );
}

export default Home;

