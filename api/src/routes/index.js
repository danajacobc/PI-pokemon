const { Router } = require('express');
const router = Router();
/* Controllers */
const {getAllPoke} = require('../controllers/getAllPoke');
const {getPokeById} = require('../controllers/getPokeById');
const { getPokeByName } = require('../controllers/getPokeByName');
const { postPokemon } = require('../controllers/postPokemon');
const { getTypes } = require('../controllers/getTypes');

/* Routers */
router.get('/pokemons', getAllPoke);
router.get('/types', getTypes);
router.get('/pokemons/name', getPokeByName);
router.get('/pokemons/:id', getPokeById);
router.post('/pokemons', postPokemon);


module.exports = router;
