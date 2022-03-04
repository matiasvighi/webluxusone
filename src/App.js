import logo from './logo.svg';
import './App.css';
import React from "react";
import './Components/Bar';
import Bar from './Components/Bar';
import Casamientos from './Components/Casamientos';

function App() {
  return (
    <div className="App">
      <Bar></Bar>
      <Casamientos></Casamientos>
      

      <header className="App-header">
        
       
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
