import React from 'react';
//import Reset from './Reset';

const hourNow = new Date();

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: hourNow.getHours(),
      min: hourNow.getMinutes(),
      sec: hourNow.getSeconds(),
    };
    setInterval(this.updateClock());
  }

  updateClock() {
    this.setState({
      hour: hourNow.getHours(),
      min: hourNow.getMinutes(),
      sec: hourNow.getSeconds(),
    });
  }
  render() {
    return (
      <>
        <p className="paragraph">¡Acarajotada! La hora es:</p>
        <p className="hour" onChange={this.updateClock.bind(this)}>
          {this.state.hour} : {this.state.min} : {this.state.sec}
        </p>
        {/* <Reset /> */}
      </>
    );
  }
}

export default Clock;
