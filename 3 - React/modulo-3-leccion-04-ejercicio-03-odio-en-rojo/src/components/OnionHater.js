import React from 'react';

let classInput = 'noHateOnion';

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.onKeyUpListener = this.onKeyUpListener.bind(this);
  }

  onKeyUpListener(ev) {
    const cebolla = 'cebolla';
    ev.target.value.toLowerCase().includes(cebolla) ? (classInput = 'hateOnion') : (classInput = 'noHateOnion');

    this.forceUpdate();
  }
  render() {
    return (
      <textarea
        className={classInput}
        onKeyUp={this.onKeyUpListener}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Escribe lo que quieras..."
      ></textarea>
    );
  }
}

export default OnionHater;
