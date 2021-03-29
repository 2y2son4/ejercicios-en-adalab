import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheeps: 0,
    };
    this.updateSheeps = this.updateSheeps.bind(this);
  }

  updateSheeps() {
    console.log('Me han clickado');

    this.setState((prevState) => {
      // prevState.sheepsInArray.push(<li>Oveja</li>);
      return {
        sheeps: prevState.sheeps + 1,
        // no nos gusta guardar en el estado código JSX, por ello la siguiente línea no está bien

        // es más fácil guardar datos en el estado y en el render convertirlos a código JSX
        // además recordad que en el estado debemos intentar guardar los datos sin modificar
      };
    });
  }

  render() {
    console.log(this.state);
    const result = [];
    for (let index = 0; index < this.state.sheeps; index++) {
      result.push(
        <li className="li" key={index}>
          <img
            className="imgSheep"
            src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
            alt="Sheep"
          />
        </li>
      );
    }

    return (
      <>
        <p className="count">
          <span role="img" aria-label="sheep">
            🐑
          </span>{' '}
          {this.state.sheeps}{' '}
          <span role="img" aria-label="sheep">
            🐑
          </span>{' '}
        </p>
        <button className="sheepBtn" onClick={this.updateSheeps}>
          Click for sheeps
        </button>
        <ul className="ul">{result}</ul>
      </>
    );
  }
}

export default SheepCounter;

// Pintar listados → se utiliza la longitud del array. Crear un for clásico que vaya desde 0 a 5 ovejas (en vez de .map, que necesita un array de objetos, por ejemplo), pushear en un array los li y luego pintar los li. Se guarda un number con número total de ovejas. i< this.state.counter;

// utilizar el prevState → se hace en el manejador.

// se pinta en el render
