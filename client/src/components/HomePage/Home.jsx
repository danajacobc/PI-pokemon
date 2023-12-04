import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import {
  allPoke,
  filterOrigin,
  filterTypes,
  getTypes,
  orderAlf,
  orderAtt,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "../HomePage/Home.module.css";
import Page from "../Pagination/Pagination";

const Home = () => {
  //const pokeByName = useSelector((state) => state.allPokemons);
  const pokemons = useSelector((state) => state.allPokemons);
  const pokesBackUp = useSelector((state) => state.allPokemonsCopy);
  const allTypes = useSelector((state) => state.types);
  const [orden, setOrden] = useState(""); //voy a mostrar que orden estoy aplicando, hace que vuelva a renderizar mi useEffect.
  //const [filtros, setFiltros] = useState();
  const dispatch = useDispatch();

  /*Paginado*/
  const [currentPage, setCurrentPage] = useState(1);
  const [pokePerPage, setPokePerPage] = useState(12);
  const [render, setRender] = useState(false);
  const indexLastPoke = currentPage * pokePerPage; // 12 -> seria el indice del 13 poke
  const indexFirstPoke = indexLastPoke - pokePerPage; // 12 - 12 = 0 -> me da el indice del primer poke.
  const currentPokes = pokemons.slice(indexFirstPoke, indexLastPoke);

  const [isExpanded, setIsExpanded] = useState(false);

  const page = (pageNum) => {
    setCurrentPage(pageNum); //seteo el estado, y esto hace que cambie el valor del resto de mis constantes del paginado.
  };

  useEffect(() => {
    if (pokemons.length === 0) {
      dispatch(allPoke());
      dispatch(getTypes());
    }
  }, [render]);

  /*handlers*/
  const handleOrderAlf = (e) => {
    e.preventDefault();
    dispatch(orderAlf(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
    setRender(!render);
  };

  const handleOrderAtt = (e) => {
    e.preventDefault();
    dispatch(orderAtt(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
    setRender(!render);
  };

  const handleFilterOrigin = (e) => {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterType = (e) => {
    e.preventDefault();
    dispatch(filterTypes(e.target.value));
    setCurrentPage(1);
  };

  const handleClick = (e) => {
    //refresco largando nuevamente una petición al back.
    e.preventDefault();
    dispatch(allPoke(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${isExpanded ? styles.sideBar : styles.close}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {isExpanded ? (
          <div className={styles.menuContainer}>
            <div className={styles.filterContainer}>
              <h4>Filtros</h4>

              <select
                className={styles.button}
                name="filterOrigin"
                id="filterOrigin"
                onChange={(e) => handleFilterOrigin(e)}
                defaultValue="all"
              >
                <option value="all">Todos</option>
                <option value="A">API</option>
                <option value="DB">DataBase</option>
              </select>

              <select
                className={styles.button}
                name="filterType"
                id="filterType"
                onChange={(e) => handleFilterType(e)}
                defaultValue="all"
              >
                <option value="all">Todos</option>
                {allTypes?.map((t, i) => {
                  return (
                    <option value={t.name} key={i}>
                      {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.orderContainer}>
              <h4>Orden</h4>
              <select
                className={styles.button}
                name="orderAlf"
                id="orderAlf"
                onChange={(e) => handleOrderAlf(e)}
                defaultValue="default"
              >
                <option value="default">Alfabéticamente</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>

              <select
                className={styles.button}
                name="orderAtt"
                id="orderAtt"
                onChange={(e) => handleOrderAtt(e)}
                defaultValue="default"
              >
                <option value="default">Ataque</option>
                <option value="A">Menor a Mayor</option>
                <option value="D">Mayor a Menor</option>
              </select>
            </div>
          </div>
        ) : (
          <h3>a</h3> 
          // cambiar por pikachu y icono de menu
        )}
      </div>
      <div className={styles.containerNav}>
        

        <SearchBar setCurrentPage={setCurrentPage} />
        {/* {pokeByName && <Card key={pokeByName.id} poke={pokeByName} />} */}

        <button className={styles.button} onClick={handleClick}>
          {" "}
          Refresh{" "}
        </button>
        <Link to="/create">
          <button className={styles.button}> Create </button>
        </Link>
        <Link to="/">
          <button className={styles.button}> Salir </button>
        </Link>
      </div>
      <div className={styles.displayContainer}>
        <div>
          <Page
            setCurrentPage={setCurrentPage}
            pokePerPage={pokePerPage}
            pokemons={pokemons.length}
            page={page}
            current={currentPage}
          />
        </div>
        <div className={styles.containerCards}>
          {pokemons.length > 0 ? (
            currentPokes.map((poke) => <Card key={poke.id} poke={poke} />)
          ) : (
            <div>
              <h3> ¡No se encontraron pokemons! </h3>
              <img
                className={styles.imageLoading}
                src="https://pa1.aminoapps.com/6515/a679c273ddaf134771ec2669ed86b0cea90faa35_hq.gif"
              />
            </div>
          )}
        </div>
        <div>
          <Page
            setCurrentPage={setCurrentPage}
            pokePerPage={pokePerPage}
            pokemons={pokemons.length}
            page={page}
            current={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
