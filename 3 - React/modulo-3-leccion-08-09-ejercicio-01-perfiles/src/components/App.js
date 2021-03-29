import React from 'react';
import '.././stylesheets/App.scss';
import UserList from './UserList';
import Filter from './Filter';
// import api from '../services/api';
import users from '../data//users.json';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //   };
  // this.getDataFromApi = this.getDataFromApi.bind(this);
  // }

  // getDataFromApi = () => {
  //   const apiUrl = 'https://randomuser.me/api/?results=50';

  //   // fetch es asíncrono. Cuando el servidor conteste se pintarán los datos.
  //   return fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.results);
  //       return data.results;
  //     });
  // };

  render() {
    // console.log('Render', this.state.users);
    return (
      <div className="App">
        <header className="App-header">
          <Filter />
          <ul className="list">
            {/* {this.renderUsers()} */}
            <UserList users={users} />
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
