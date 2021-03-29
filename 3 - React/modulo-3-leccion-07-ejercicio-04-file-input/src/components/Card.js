import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <article className="card">
        <h2 className="card__title">Título: {this.props.name}</h2>
        <p className="card__description">Resumen: {this.props.description}</p>
        <p className="card__language">Idioma: {this.props.language}</p>
        <p className="card__rating">Calificación:</p>
        <p className="card__genre">Género/s:</p>
        <p className="card__img">
          Carátula:<div className="card__img--container"></div>
        </p>
      </article>
    );
  }
}

export default Card;
