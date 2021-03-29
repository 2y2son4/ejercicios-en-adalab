import React from 'react';

class InputKeyUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'Type whatever...',
    };
  }
  update(ev) {
    this.setState({ txt: ev.target.value });
  }
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <input placeholder="Here, please" className="input" type="text" onChange={this.update.bind(this)} />
      </div>
    );
  }
}

export default InputKeyUp;
