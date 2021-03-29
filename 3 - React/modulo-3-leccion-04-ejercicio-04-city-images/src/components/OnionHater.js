import React from 'react';

class OnionHater extends React.Component {
  render() {
    const cebolla = 'cebolla';
    const onKeyUpListener = (ev) => {
      ev.target.value.toLowerCase().includes(cebolla) ? alert('ODIO LA PUTA CEBOLLA.') : console.log('Pues vale');
    };
    return (
      <textarea
        onKeyUp={onKeyUpListener}
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
