import React from 'react';
import logo from './logo.svg';
import './App.css';

const buttonClick = () =>{
    
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={buttonClick}></button>
      </header>
    </div>
  );
}

export default App;
