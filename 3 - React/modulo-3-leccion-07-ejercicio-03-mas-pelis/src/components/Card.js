import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <article className="card">
        <h2 className="card__title">Title: {this.props.name}</h2>
        <p className="card__description">Summary: {this.props.description}</p>
        <p className="card__language">Language: {this.props.language}</p>
        <p className="card__rating">Rate age: {this.props.age}</p>
        <p className="card__genre">Genre/s: {this.props.genre}</p>
      </article>
    );
  }
}

export default Card;
