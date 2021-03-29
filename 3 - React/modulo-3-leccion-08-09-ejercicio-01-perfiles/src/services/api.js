const getDataFromApi = () => {
  const apiUrl = 'https://randomuser.me/api/?results=50';

  // fetch es asíncrono. Cuando el servidor conteste se pintarán los datos.
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

export default getDataFromApi;
