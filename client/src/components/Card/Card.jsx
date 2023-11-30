
import { useDispatch } from "react-redux";
import styles from "../Card/Card.module.css"
import { pokeById } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Card = ({poke}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(pokeById(poke.id, poke.isFromAPI))
        navigate('/detail');
    }


 return (
    <div className={styles.container} onClick={handleClick}>
        <img className={styles.image} src={poke.image} />
        
        <h1>{poke.name}</h1>
        
        <h3>{poke.types}</h3>

    </div>
 )
};

export default Card;