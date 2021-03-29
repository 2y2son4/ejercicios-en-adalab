import React from 'react';
import './App.css';
import './App.scss';
//import avatar from './rita-la-cantaora.jpg';
import MediaCard from './MediaCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          name="Rita la Cantaora"
          date="Miércoles 17 de febrero de 2021"
          mockText="Lorem fistrum pecador a peich a peich al ataquerl hasta luego Lucas ese hombree por la gloria de mi madre apetecan. Llevame al sircoo benemeritaar benemeritaar llevame al sircoo pecador por la gloria de mi madre mamaar condemor sexuarl benemeritaar. Papaar papaar llevame al sircoo amatomaa apetecan no te digo trigo por no llamarte Rodrigor amatomaa ese pedazo de a gramenawer llevame al sircoo me cago en tus muelas pupita. Ahorarr a gramenawer por la gloria de mi madre sexuarl."
          likes={42}
          avatar="./rita-la-cantaora2.jpg"
          fas={false}
        />
      </div>
    );
  }
}

export default App;
