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
        <input placeholder="Here, please" className="input" type="text" onChange={this.update.bind(this)} />
        <p>{this.state.txt}</p>
      </div>
    );
  }
}

export default InputKeyUp;
