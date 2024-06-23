const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.POSTGRES_HOST || 3000;

conn.sync({ force: false })
.then(() => {
  server.listen(port, () => {
    console.log('Server levantado en puerto: 3001'); // eslint-disable-line no-console
  });
})
.catch((error) => {
  console.log("Error al conectar:", error);
})
