const cors = require('cors');
const express = require('express');

const productsData = require('./data/products.json');
const usersData = require('./data/users.json');

// SERVER

// config server
// crear una aplicaicón de express para meterle el servidor
const app = express();
// para poder recibir parámetros de tipo body
app.use(express, json());
// para admitir peticiones desde cualquier página
app.use(cors());

// init express application
const serverPort = 3000;
// el servidor va a empezar a escuchar peticiones que le lleguen por el puerto 3000
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// API
// crear endpoints (app es el nombre del servidor). este es el endpoint más simple que podemos encontrar
// es como un addEventListener

app.get('/api/products', (req, res) => {
  // Cojo los productos y los devuelvo
  res.json(productsData);
});

// endpoint de login

app.post('/api/user/login', (req, res) => {
  // Cojo los datos que recibo desde el navegador que están en req.body.email y req.body.password
  // Con estos datos busco en el array de usuarios si el usuario existe
  const userFound = usersData.find((user) => {
    // la info que se necesita cifrar la cifra el navegador por nosotras(aparecerá un candadito en alguna parte misteriosa por ser https)
    return user.email === req.body.email && user.password === req.body.password;
  });

  if (userFound !== undefined) {
    // Si el usuario existe devuelvo el id del usuario
    res.json({
      error: false,
      userId: userFound.id,
    });
  } else {
    // Si el usuario no existe devuelvo un error
    res.status(404).json({
      error: 'user-not-found',
      message: 'User not found',
    });
  }
});

// para que localhost:3000/ muestre algo diferente al "Cannot GET"
app.get('/', (req, res) => {
  res.json({ result: 'error, lerda' });
});
