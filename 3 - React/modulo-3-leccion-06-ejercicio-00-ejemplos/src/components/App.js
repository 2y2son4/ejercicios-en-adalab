import React, { useState } from 'react';
import '../App.css';
import RandomInteger from './RandomInteger';

const App = () => {
  const [number, setNumber] = useState(0);
  const generateRandomInteger = () => Math.floor(Math.random() * 100);

  const handleRandomInteger = () => {
    setNumber(generateRandomInteger());
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleInputName = (evt) => {
    setName(evt.target.value);
  };
  const handleInputEmail = (evt) => {
    setEmail(evt.target.value);
  };

  return (
    <div className="App">
      <div className="App-header">
        <RandomInteger getRandom={handleRandomInteger} randomNumber={number} />

        <form>
          <label className="label" htmlFor="name">
            Nombre
          </label>
          <input
            className="input"
            type="text"
            name="name"
            onChange={handleInputName}
            placeholder="Escribe aquí tu nombre"
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="text"
            name="email"
            onChange={handleInputEmail}
            placeholder="Escribe aquí tu email"
          />
        </form>

        <section>
          <p>Tu nombre es: {name}</p>
          <p>Tu email es: {email}</p>
        </section>
      </div>
    </div>
  );
};

export default App;
