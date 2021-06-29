import React from 'react';
import logo from './images/img.jpg';
import './App.css';

function App() {
  return (
    <div style={{textAlign:"center"}}>
        <h1>Progessive Web App</h1>
        <img src={logo} style={{ width: "100%", height: "auto"}} alt="logo" />
   </div>
  );
}

export default App;
