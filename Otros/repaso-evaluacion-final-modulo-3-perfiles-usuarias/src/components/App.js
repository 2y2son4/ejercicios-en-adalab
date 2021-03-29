import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import UserList from './UserList';
import UserDetail from './UserDetail';
import Api from '../services/api';
import Header from './Header';
import '../stylesheets/App.scss';
import '../stylesheets/Main.scss';

const App = () => {
  // hooks para el estado.
  const [users, setUsers] = useState([]); // este array se llenará con la data que nos devuelva el API;
  const [name, setName] = useState('');
  const [gender, setGender] = useState('all');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    Api().then((data) => setUsers(data));
  }, []);

  const handleFilter = (inputChange) => {
    console.log(inputChange, inputChange.value);
    if (inputChange.key === 'name') {
      setName(inputChange.value);
    } else if (inputChange.key === 'gender') {
      setGender(inputChange.value);
    } else if (inputChange.key === 'location') {
      const indexCity = cities.indexOf(inputChange.value);
      if (indexCity === -1) {
        const newCities = [...cities, inputChange.value];
        setCities(newCities);
      } else {
        const newCities = [...cities];
        newCities.splice(indexCity, 1);
        setCities(newCities);
      }

      // console.log(indexCity);
      // newCities.push(inputChange.value);
    }
  };
  // console.log(cities);
  // el array filterUsers contendrá a todos los usuarios, de modo que este tendrá que ser el array sobre el que se hacen todos los filtros.
  const filterUsers = users
    .filter((user) => {
      return user.name.toUpperCase().includes(name.toUpperCase());
    })
    .filter((user) => {
      // aquí se evalua cuál es el valor: all, female, male o nonBinary

      // if (gender === 'all') {
      //   // si el valor es igual a todos, no se hace condicional y se devuelve lo filtrado anteriormente
      //   return true;
      // } else {
      //   // gender es el valor del estado que se tenía previmente guardado.
      //   return user.gender === gender;
      // }
      return gender === 'all' ? true : user.gender === gender;
    })
    .filter((user) => {
      if (cities.lenght === 0) {
        return true;
      } else {
        return cities.includes(user.city);
      }
    });

  // función para recolectar el listado de ciudades del array de users que nos devuelve el API
  const getCities = () => {
    return users.map((user) => user.city);
  };
  const renderDetail = (props) => {
    // id del elemento desde la ruta que ha sido clickada, para pasárselo a userDetail.
    const id = props.match.params.id;
    const selectedUser = users.find((user) => {
      return user.id === id;
    });
    console.log(props);
    return <UserDetail user={selectedUser} />;
  };

  return (
    <>
      <Header />
      <main className="main">
        <Filters handleFilter={handleFilter} cities={getCities()} />
        {/* <UserList users={users} /> */}
        <UserList users={filterUsers} />
      </main>
      <Switch>
        <Route patch="/user/:id" render={renderDetail} />
      </Switch>
    </>
  );
};
export default App;
