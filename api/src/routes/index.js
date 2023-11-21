const { Router } = require('express');
const router = Router();
/* controllers */
const {getAllPoke} = require('../controllers/getAllPoke');
const {getPokeById} = require('../controllers/getPokeById');
const { getPokeByName } = require('../controllers/getPokeByName');

// Configurar los routers
router.get('/pokemons', getAllPoke);
router.get('/pokemons/name', getPokeByName);
//router.get('/pokemons/:id', getPokeById);


module.exports = router;
