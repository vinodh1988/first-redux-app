import React from 'react';
import './App.css';

const App= ({message,changeMessage})=>{

  return (
    <div>
        <h1> {message} </h1>
        <button onClick={changeMessage}>Get Messages</button>
    </div>
  )
}

export default App;
