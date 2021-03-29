import React from 'react';
import User from './User';
import '../stylesheets/UserList.scss';

const UserList = (props) => {
  const userElement = props.users.map((user) => {
    // console.log(user);
    const { id } = user;
    return (
      <li className="list__item card" key={id}>
        <User user={user} />
      </li>
    );
  });
  return (
    <article className="article">
      <ul className="list">{userElement}</ul>
    </article>
  );
};

export default UserList;
