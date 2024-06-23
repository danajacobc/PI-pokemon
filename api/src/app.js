// //configuración de mi API

// const express = require('express');
// const server = express();
// const cookieParser = require('cookie-parser');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const routes = require('./routes/index.js');

// require('./db.js');


// server.name = 'API';
// server.use(express.json()); //middleware para poder interpretar json que me mandan desde el front.

// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// server.use(bodyParser.json({ limit: '50mb' }));
// server.use(cookieParser());
// server.use(morgan('dev'));
// server.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

// server.use('/', routes); //especifico las rutas que se utilizaran. -> voy a routes.

// // Error catching endware.
// server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   const status = err.status || 500;
//   const message = err.message || err;
//   console.error(err);
//   res.status(status).send(message);
// });

// module.exports = server;

const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require('cors');

require('./db.js');

server.name = 'API';

// Configurar CORS para permitir solicitudes desde cualquier origen
server.use(cors({
  origin: '*', // Permite cualquier origen. Puedes ajustar esto a una lista específica de orígenes si es necesario.
  credentials: true,
}));

server.use(express.json()); // Middleware para poder interpretar json que me mandan desde el front.
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes); // Especifico las rutas que se utilizarán -> voy a routes.

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
