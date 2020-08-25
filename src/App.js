import React from 'react';
import city from './city.jpg';
import './App.css';
import Home from './home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Home/>
        <img src={city} className="city-img" />
      </header>
    </div>
  );
}

export default App;
