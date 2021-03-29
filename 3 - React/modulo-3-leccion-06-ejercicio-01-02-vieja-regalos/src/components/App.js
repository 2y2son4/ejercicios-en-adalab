import React, { useState } from 'react';
import '../App.css';
import MoreAge from './MoreAge';
import MorePresents from './MorePresents';

const App = () => {
  const [number, setNumber] = useState(35);
  const [present, setPresent] = useState(0);
  const generateMoreYears = () => number + 1;
  const generateMorePresents = () => present + 1;

  const handleMoreYears = () => {
    setNumber(generateMoreYears());
  };
  const handleMorePresents = () => {
    setPresent(generateMorePresents());
  };

  console.log(number);
  return (
    <div className="App">
      <div className="App-header">
        <span className="span">Hoy tengo {number} años de edad.</span>
        <MoreAge getYear={handleMoreYears} />
        <span className="span">Hoy tengo {present} regalos.</span>
        <MorePresents getPresent={handleMorePresents} />
      </div>
    </div>
  );
};

export default App;
