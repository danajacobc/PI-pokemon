const axios = require("axios");
const {formatPokemonApi, formatMyPoke} = require('../utils/index');
const {Pokemon, Type} = require("../db");

const getAllPoke = async (req, res) => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
        const allPokeUrls = data.results.map((p) => p.url);
        
        if(!data.results) return res.status(404).json({message: 'No se recibe la info de data.results'});

        const requests = allPokeUrls.map((url) => axios.get(url));
        const responses = await Promise.all(requests); //el promise.all NO resuelve las promesas en orden.

        const allPokeAPI = formatPokemonApi(responses);
        //agregar para traer los pokes de mi bd
        const findPokeDB = await Pokemon.findAll({
            include: {
              model: Type,
              attributes: ["name"],
              through: { attributes: [] },
            },
          });
        //console.log('aquiii', findPokeDB[0].dataValues.types[0].dataValues.name);
        const allPokeDB = findPokeDB.map((poke) => formatMyPoke(poke));
       

        const allPoke = [...allPokeAPI, ...allPokeDB];

        return res.status(200).json(allPoke);
        
    } catch (error) {
       return res.status(500).json(error.message);
    }
};

module.exports = {
    getAllPoke,
};