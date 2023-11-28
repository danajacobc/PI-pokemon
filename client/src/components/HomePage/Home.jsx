import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SearchBar from '../SearchBar/SearchBar';
import { allPoke } from "../../redux/actions";
import { orderAlf, orderAtt } from '../../redux/actions';
import {Link} from 'react-router-dom';
import styles from '../HomePage/Home.module.css'



const Home = () => {
    const pokeByName = useSelector((state) => state.allPokemons);
    const pokemons = useSelector((state) => state.allPokemons);
    const [orden, setOrden] = useState("");
    const [filtros, setFiltros] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if(pokemons.length === 0){
            dispatch(allPoke())
        }
        console.log(pokemons);
    }, [pokemons, dispatch]);

    /*handleeeeeeeee*/
    const handleOrderAlf = (e) => {
        e.target.value === "all"
        ? dispatch(allPoke())
        : dispatch(orderAlf(e.target.value));
        setFiltros();
        setOrden(`Ordenado ${e.target.value}`);
    };

    const handleOrderAtt = (e) => {
        e.target.value === "all"
        ? dispatch(allPoke())
        : dispatch(orderAtt(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
    };
    

    return (
        <div >
            <div className={styles.container}>
            <Link to='/'>
            <button className={styles.button}> Log out </button>
            </Link>
            <SearchBar />
            {
            pokeByName && (
                    <Card key={pokeByName.id} poke={pokeByName} />
                )
            }
            </div>
            <div>
                {/* Ordenamiento */}
            <select className={styles.button} value={filtros} name="orderAlf" id="orderAlf" onChange={(e) => handleOrderAlf(e)} defaultValue="all">
                    <option key="1" value="all">Alfabeticamente</option>
                    <option key="2" value="A">Ascendente</option>
                    <option key="3" value="D">Descendente</option>   
            </select>

            <select className={styles.button} name="orderAtt" id="orderAtt" onChange={(e) => handleOrderAtt(e)} defaultValue="all">
                    <option key="4" value="all">Ataque</option>
                    <option key="5" value="A">Menor a Mayor</option>
                    <option key="6" value="D">Mayor a Menor</option>   
            </select> 

            </div>
            <div>
            {
            pokemons.map((poke)=> <Card key={poke.id} poke={poke} />)
            }
            </div>
            

        </div>
    )

};

export default Home;