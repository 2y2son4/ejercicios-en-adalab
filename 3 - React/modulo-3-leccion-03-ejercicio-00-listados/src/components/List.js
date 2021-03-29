import React from 'react';

class List extends React.Component {
  render() {
    const result = this.props.items.map((item, i) => {
      return (
        <li key={i}>
          <h2>Nombre: {item.name}</h2>
          <p>Descripción: {item.description}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Categoría: {item.category}</p>
          <p>Precio: {item.price}</p>
        </li>
      );
    });
    return <ul>{result}</ul>;
  }
}

export default List;
