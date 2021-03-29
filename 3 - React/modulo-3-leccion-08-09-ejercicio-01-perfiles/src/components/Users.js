import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.renderUsers = this.renderUsers.bind(this);
  }
  renderUsers() {
    const { users, name, city, age, imgSrc } = this.props;
    return users.map((user, i) => {
      return (
        <>
          <li className="list__item" key={i}>
            {user.name.first} <img src={imgSrc} alt="" className="card__img" />{' '}
            <p className="card__text--city">City: {city}</p>
            <p className="card__text--age">Age: {age}</p>
            <h2 className="card__name">Name: {name}</h2>{' '}
          </li>
        </>
      );
    });
  }
  render() {
    return <article className="card">{this.renderUsers()}</article>;
  }
}

export default Users;
