import React from 'react';
import '.././stylesheets/App.scss';
import clubs from '../data/Clubs.json';
import ClubList from './ClubList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClubList clubs={clubs} />
      </header>
    </div>
  );
}

export default App;
