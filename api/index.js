const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const port = process.env.PORT || 3000;

conn.sync({ force: false })
.then(() => {
  server.listen(port, () => {
    console.log(`Server levantado en puerto: ${port}`); // eslint-disable-line no-console
  });
})
.catch((error) => {
  console.log("Error al conectar:", error);
})
