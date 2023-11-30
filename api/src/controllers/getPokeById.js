const axios = require("axios");
const {formatSinglePoke, formatMyPoke} = require("../utils");
const {Pokemon} = require("../db");

const getPokeById = async (req, res) => {
    const {id} = req.params;
    const {isFromAPI} = req.query;
    
    try {
        let pokemon;
        if(isFromAPI === "true") {
            
            const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon = formatSinglePoke(data);
        } else {
           
            const dataDB = await Pokemon.findOne({where: {id}});
           
            pokemon = formatMyPoke(dataDB);
            }
        
        
        return res.status(200).json(pokemon);

    } catch (error) {
        return res.status(500).json(error.message);  
    }
};

module.exports = { getPokeById };
