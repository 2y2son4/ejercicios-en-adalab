import React from 'react';

class ButtonAlert extends React.Component {
  render() {
    const onClickListener = (ev) => {
      alert('Para más información, acuda a recepción.');
    };
    return (
      <button className="btn" onClick={onClickListener}>
        Pedir más información
      </button>
    );
  }
}

export default ButtonAlert;
