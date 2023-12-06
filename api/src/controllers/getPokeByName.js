const axios = require("axios");
const {formatSinglePoke} = require("../utils");
const {Pokemon, Type} = require("../db");
const {Op} = require('sequelize');

const getPokeByName = async (req, res) => {
    try {
        const { name } = req.query; 
        
        if(!name) return res.status(400).json({message: `Ingrese un nombre para la consulta.`});
        
        const lowercaseName = name.toLowerCase();
        let pokemon = {};

        pokemon = await Pokemon.findOne({where: { name: { [Op.iLike]: lowercaseName }}});
        
        if(pokemon) {
            return res.status(200).json(pokemon);
        } 
        
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${lowercaseName}`)

        if(data){
            pokemon = formatSinglePoke(data);
        }
        if(!pokemon)return res.status(404).json({message: `No existe un pokemon llamado ${name}`});
        
        return res.status(200).json(pokemon);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};

module.exports = {
    getPokeByName,
}