import React from 'react';
import '../stylesheets/App.css';
import '../stylesheets/App.scss';
import ButtonAlert from './ButtonAlert';
import OnionHater from './OnionHater';
import Destiny from './Destiny';
import RandomMurray from './RandomMurray';
import CityImage from './CityImage';

class App extends React.Component {
  render() {
    return (
      <div className="App-header megaContainer">
        <div className="containerRandom">
          <Destiny />
          <CityImage />
        </div>
      </div>
    );
  }
}

export default App;
