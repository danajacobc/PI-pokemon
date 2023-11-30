import {useSelector, useDispatch} from 'react-redux';
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SearchBar from '../SearchBar/SearchBar';
import { allPoke, filterOrigin, filterTypes, getTypes, orderAlf, orderAtt } from "../../redux/actions";
import {Link} from 'react-router-dom';
import styles from '../HomePage/Home.module.css'



const Home = () => {
    const pokeByName = useSelector((state) => state.allPokemons);
    const pokemons = useSelector((state) => state.allPokemons);
    const types = useSelector((state) => state.types)
    const [orden, setOrden] = useState(""); //voy a mostrar que orden estoy aplicando.
    // const [filtros, setFiltros] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        if(pokemons.length === 0){
            dispatch(allPoke())
        };
        dispatch(getTypes());
    }, []);

    /*handlers*/
    const handleOrderAlf = (e) => {
        e.target.value === "all"
        ? dispatch(allPoke())
        : dispatch(orderAlf(e.target.value));
        //setFiltros();
        setOrden(`Ordenado ${e.target.value}`);
    };

    const handleOrderAtt = (e) => {
        e.target.value === "all"
        ? dispatch(allPoke())
        : dispatch(orderAtt(e.target.value));
        setOrden(`Ordenado ${e.target.value}`);
    };

    const handleFilterOrigin = (e) => {
        dispatch(filterOrigin(e.target.value))
    };

    const handleFilterType = (e) => {
        // e.target.value === "all"
        // ? dispatch(allPoke())
        // : 
        dispatch(filterTypes(e.target.value));
        // setOrden(`Ordenado ${e.target.value}`);
    };

    const handleClick = (e) => {
        dispatch(allPoke(e.target.value));
    }
    

    return (
        <div className={styles.container}>
            <div className={styles.containerNav}>
            
            {/* Ordenamiento */}
            <select className={styles.button} name="orderAlf" id="orderAlf" onChange={(e) => handleOrderAlf(e)} defaultValue="all">
                    <option value="all">Alfabéticamente</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>   
            </select>

            <select className={styles.button} name="orderAtt" id="orderAtt" onChange={(e) => handleOrderAtt(e)} defaultValue="all">
                    <option value="all">Ataque</option>
                    <option value="A">Menor a Mayor</option>
                    <option value="D">Mayor a Menor</option>   
            </select> 
            {/* Filtros */}
            <select className={styles.button} name="filterOrigin" id="filterOrigin" onChange={(e) => handleFilterOrigin(e)} defaultValue="all">
                    <option value="all">Origen</option>
                    <option value="A">API</option>
                    <option value="DB">DataBase</option>
            </select>

            {/* <select className={styles.button} name="filterType" id="filterType" onChange={(e) => handleFilterType(e)} defaultValue="all">
                    <option value="all">Tipos</option>
                    {types?.map((t, i) => {
                        return (
                            <option value={t} key={i}>
                                {t}
                            </option>
                        )
                    })}
                       
            </select> */}
            
            <SearchBar />
            {
            pokeByName && (
                    <Card key={pokeByName.id} poke={pokeByName} />
                )
            }

            <button className={styles.button} onClick={handleClick}> Refresh </button>

            <Link to='/'>
            <button className={styles.button}> Log out </button>
            </Link>

            </div>

            <div className={styles.containerCards}>
            {
            pokemons.map((poke)=> <Card key={poke.id} poke={poke} />)
            }
            </div>
            

        </div>
    )

};

export default Home;