import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    console.log('Se está ejecuntando el método componentDidMount()');
    // guardamos el identificador del interval para limpiarlo en componentWillUnmount
    this.intervalId = setInterval(this.incrementCounter, 1000);
    // NOTA: guardamos el identificador en un atributo de la clase y
    // no en el estado ya que no queremos pintar el identificador en el DOM
  }

  // si se borra el método componentWillUnmount() aparece el siguiente mensaje en la consola del navegador: "Warning: Hash history cannot PUSH the same path; a new entry will not be added to the history stack"
  componentWillUnmount() {
    console.log('Se está ejecuntando el método componentWillUnmount()');

    // limpiamos el interval
    clearInterval(this.intervalId);
  }
  incrementCounter() {
    console.log('Se está ejecuntando el método incrementCounter()');

    this.setState((prevState) => {
      return { counter: prevState.counter + 1 };
    });
  }
  render() {
    console.log('Se está ejecuntando el método render() del counter');

    return (
      <div className="App">
        <div className="App-header paragraph">Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
