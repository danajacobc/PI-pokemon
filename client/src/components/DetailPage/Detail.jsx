import { useParams } from "react-router-dom";
import { pokeById, resetDetail } from "../../redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../DetailPage/Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const poke = useSelector((state) => state.detail);

  useEffect(() => {
    if(!Object.keys(poke).length > 0) navigate('/home');
    return () => {
      dispatch(resetDetail());
    };
  }, [dispatch]);

  return (
    <div>
      <div className={styles.container}>
        <Link to="/home">
          <button className={styles.button}>Home</button>
        </Link>
      </div>

      <div>
        <h1>{poke.name}</h1>
        <img src={poke.image} />
        <h2>Vida: {poke.hp}</h2>
        <h2>Ataque: {poke.attack}</h2>
        <h2>Defensa: {poke.defense}</h2>
        <h2>Velocidad: {poke.speed}</h2>
        <h2>Altura: {poke.height}</h2>
        <h2>Peso: {poke.weight}</h2>
        <h2>Tipo: {poke.types?.join(' - ')}</h2>
      
      </div>
    </div>
  );
};

export default Detail;
