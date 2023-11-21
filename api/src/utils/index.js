//Funciones para mis controllers.

const formatPokemonApi = (pokemonArray) => {
    const allPoke = pokemonArray.map((response) => { //le doy el formato a mis pokes
        const data = response.data;
        const pokeData = formatSinglePoke(data);

        return pokeData;
    });

    return allPoke;
}

const formatSinglePoke = (data) => {
    const pokeData = {
        id: data.id,
        name: data.name,
        image: data.sprites?.other?.home?.front_default,
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: data.height,
        weight: data.weight,
    };

    data.stats.forEach((stat) => {
        switch (stat.stat.name) {
            case 'hp':
                pokeData.hp = stat.base_stat;
                break;
            case 'attack':
                pokeData.attack = stat.base_stat;
                break;
            case 'defense':
                pokeData.defense = stat.base_stat;
                break;
            case 'speed':
                pokeData.speed = stat.base_stat;
                break;
            default:
                break;
        }
    }); 
    return pokeData;
}


module.exports = {
    formatPokemonApi,
    formatSinglePoke,
}
