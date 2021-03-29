import React from 'react';

class Flick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flickClass: 'div1',
      text: 'Click me if you dare...',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      let nextClass;
      if (prevState.flickClass === 'div1') {
        nextClass = 'div2';
      } else {
        nextClass = 'div1';
      }

      return {
        flickClass: nextClass,
      };
    });
  }

  render() {
    return (
      <div className={this.state.flickClass} onClick={this.handleClick}>
        {this.state.text}
      </div>
    );
  }
}

export default Flick;
