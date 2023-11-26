import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { allPoke } from "../../redux/actions";
import Card from "../Card/Card";

const Home = () => {
    /* Estados locales */
    const pokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPoke())
    }, [])

    /* Funciones */
    const onSearch = async (name) => {
    try {
      const {data} = await axios(`http://localhost:3001/pokemons/name?name=${name}`);
      if(characters.some((c) => c.name === name)) {
          return window.alert(`¡Pokemon ${name} ya encontrado anteriormente!`)
      } else {
        if(data.name) {
          setCharacters((charAnt) => [...charAnt, data]);
        }
      }
    } catch(error) {
      alert(`¡No encontramos el Pokemon ${name}!`);
    }
  }

    /* Renderizo */
    return (
        <div >
            <p> Homeeeeeeeeee poke :3 </p>
            <div> 
            {
            pokemons.map((poke)=> <Card key={poke.id} poke={poke} />)
            }
            </div>
        </div>
    )

};

export default Home;