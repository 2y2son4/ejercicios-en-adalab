import avatar from './rita-la-cantaora.jpg';
// import reactDom from 'react-dom';
import React from 'react';
import './App.css';
import './App.scss';

// const titleClassNames = 'name-title';
// const titleElement = <h1 className={titleClassNames}>¡Hola, mundo!</h1>;
const date = 'Lunes 15 de enero de 2021';
const userName = 'Rita la cantaora';
// const userAvatar = '';
const mockText =
  'Lorem fistrum pecador a peich a peich al ataquerl hasta luego Lucas ese hombree por la gloria de mi madre apetecan. Llevame al sircoo benemeritaar benemeritaar llevame al sircoo pecador por la gloria de mi madre mamaar condemor sexuarl benemeritaar. Papaar papaar llevame al sircoo amatomaa apetecan no te digo trigo por no llamarte Rodrigor amatomaa ese pedazo de a gramenawer llevame al sircoo me cago en tus muelas pupita. Ahorarr a gramenawer por la gloria de mi madre sexuarl.';

class App extends React.Component {
  constructor(props) {
    super(props);
    // super llama a la clase madre React.Component (¿?¿?¿?¿?).
  }

  render() {
    const appRoot = (
      <div className="App">
        <header className="App-header">
          <div className="main-container">
            <div className="header-container">
              <img className="avatar" src={avatar} alt="avatar" />
              <h1 className="name-title">{userName}</h1>
              <p className="date">{date}</p>
            </div>
            <p className="main-paragraph">{mockText}</p>

            <div className="footer-container">
              <p className="more">Leer más...</p>
              <p className="likes">
                {' '}
                42 <i className="fas fa-heart icon"></i>
              </p>
            </div>
          </div>
        </header>
      </div>
    );
    return appRoot;
  }
}

export default App;
