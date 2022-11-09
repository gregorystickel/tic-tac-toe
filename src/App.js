import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  //let str = "This is a string";
  const [squares, setSquares] =  useState(["","","","","","","","",""]);
  const [player, setPlayer] = useState(true);

  return (
    <div className="App">
      {
      <Square 
        squares={squares}
        setSquares={setSquares}
        player={player}
        setPlayer={setPlayer}
      />
      }
    </div>
  );
}

export default App;
