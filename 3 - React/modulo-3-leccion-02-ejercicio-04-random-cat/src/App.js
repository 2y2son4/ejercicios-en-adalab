import React from 'react';
import RandomCat from './components/RandomCat';
import CatList from './components/CatList';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CatList />
      </div>
    );
  }
}

export default App;
