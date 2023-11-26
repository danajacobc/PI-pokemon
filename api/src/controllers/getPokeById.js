const axios = require("axios");
const {formatSinglePoke} = require("../utils");
const {Pokemon} = require("../db");

const getPokeById = async (req, res) => {
    try {
        const {id} = req.params;

        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        let pokemon = {};
        if(data){

            pokemon = formatSinglePoke(data);

        } else {
            pokemon = await Pokemon.findOne({where: {id}})
        }
        return res.status(200).json(pokemon);

    } catch (error) {
        return res.status(500).json(error.message);  
    }
};

module.exports = { getPokeById };