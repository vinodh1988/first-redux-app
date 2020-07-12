import React from 'react';
import './App.css';
import { ApiConnected } from './Redux/connectedComponents/ApiConnected';

const App= ({message,changeMessage})=>{

  return (
    <div>
        <h1> {message} </h1>
        <button onClick={changeMessage}>Get Messages</button>
        <ApiConnected/>
    </div>
  )
}

export default App;
