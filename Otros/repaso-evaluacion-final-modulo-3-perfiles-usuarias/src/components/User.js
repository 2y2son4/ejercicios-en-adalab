import React from 'react';

import { Link } from 'react-router-dom';
import '../stylesheets/UserList.scss';

const User = (props) => {
  const { name, image, city, gender, age, email } = props.user;
  return (
    <>
      <Link to={`/user${props.user.id}`} />
      <img className="card__img" src={image} alt="User" />
      <h4 className="card__name">{name}</h4>
      <p className="card__text--city">{city}</p>
      <p className="card__text--age">
        {gender} / {age}
      </p>
      <p className="card__text--email">{email}</p>
    </>
  );
};

export default User;
