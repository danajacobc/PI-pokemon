import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { allPoke } from "../../redux/actions";
import Card from "../Card/Card";
import Cards from "../Cards/Cards";

const AllPokemons = () => {

    const pokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPoke())
    }, [dispatch]);

    return (
        <div>
            <Cards pokemons={pokemons}/>
        </div>
    )
}

export default AllPokemons;