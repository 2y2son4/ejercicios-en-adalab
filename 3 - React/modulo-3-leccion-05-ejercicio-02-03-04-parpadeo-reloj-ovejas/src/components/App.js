import '.././stylesheets/App.css';
import React from 'react';
import Flick from './Flick';
import Clock from './Clock';
import SheepCounter from './SheepCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Flick />
        <Clock /> */}
        <SheepCounter />
      </header>
    </div>
  );
}

export default App;
