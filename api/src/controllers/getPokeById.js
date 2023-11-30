const axios = require("axios");
const { formatSinglePoke, formatMyPoke } = require("../utils");
const { Pokemon } = require("../db");

const getPokeById = async (req, res) => {
  const { id } = req.params;
  const { isFromAPI } = req.query;

  try {
    let pokemon;
    if (isFromAPI == "true") {
      const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      pokemon = formatSinglePoke(data);
    } else {
        console.log('llegue');
      const dataDB = await Pokemon.findOne({
        where: { id }
      });
      console.log("porrrrqueeeee", dataDB.dataValues);
      pokemon = formatMyPoke(dataDB);
      console.log("dentro del else:", pokemon);
    }
    console.log("acaaaaaa", pokemon);

    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { getPokeById };
