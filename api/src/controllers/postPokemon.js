const { formatMyPoke } = require("../utils");
const {Pokemon, Type} = require("../db");


const postPokemon = async (req, res) => {
try {
    const {name, image, imageShiny, hp, attack, defense, speed, height, weight, types} = req.body; //types: [{fuego}, {agua}, {aire}]

    if(!name || !hp || !attack || !defense || !types || types.length < 2) return res.status(401).json({message: 'Faltan datos necesarios para crear el Pokemon.'})

    const datos = {name, image, imageShiny, hp, attack, defense, speed, height, weight}  
    const newPoke = await Pokemon.create(datos);

    
    const type = await Type.findAll({where: {name: types}});
    await newPoke.addTypes(type);

    const newPokeWithTypes = {...newPoke.dataValues, types: types.join(' - ')}

    //Otra opción titulada: complicarse la vida.
    // const typesPromises = types.map(async (typeName) => {
    //     const [type] = await Type.findOrCreate({where: {name: typeName}});
    //     return type; 
    //  })

    // const pokeTypes = await Promise.all(typesPromises);
    // await newPoke.addTypes(pokeTypes);

    return res.status(200).json(newPokeWithTypes);

} catch (error) {
    return res.status(500).json(error.message);
}
};

module.exports = {
    postPokemon,
}