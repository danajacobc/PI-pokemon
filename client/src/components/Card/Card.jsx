import { Link } from "react-router-dom";

const Card = ({poke}) => {

 return (
    <div>
        <img src={poke.image} />
        <Link to={`/detail/${poke.id}`}>
        <h1>{poke.name}</h1>
        </Link>
        <h3>{poke.types.join(' - ')}</h3>

    </div>
 )
};

export default Card;