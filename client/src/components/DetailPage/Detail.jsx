import { useParams } from "react-router-dom";
import { pokeById } from "../../redux/actions";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';


const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const poke = useSelector(state => state.detail)

    useEffect(() => {
        dispatch(pokeById(id))
    }, [])

    return (
       <div>
        <h1>{poke.name}</h1>
        <img src={poke.image} />
        <h2>Vida: {poke.hp}</h2>
        <h2>Ataque: {poke.attack}</h2>
        <h2>Defensa: {poke.defense}</h2>
        <h2>Velocidad: {poke.speed}</h2>
        <h2>Altura: {poke.height}</h2>
        <h2>Peso: {poke.weight}</h2>
        <h2>Tipo: {poke.types?.join(' ')}</h2>
       </div>
    )
   };
   
   export default Detail;