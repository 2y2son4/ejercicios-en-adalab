import React, { Component } from 'react';
import '../stylesheets/Card.scss';
import Users from './Users';

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <Users
        users={users}
        // imgSrc={users.picture.medium}
        // name={users.name.first + '' + users.name.last}
        // city={users.location.city}
        // age={users.dob.age}
      />
    );
  }
}

export default UserList;
