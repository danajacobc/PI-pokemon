import styles from "./LandingPage.module.css";
import {Link} from 'react-router-dom';
import pikachu from '../PokemonImages/landing/pikachu.png'
import lautiname from '../PokemonImages/landing/lauti.png'

const LandingPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.welcome}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" width="550px"/>
            <img src={`${lautiname}`} width="300px"/>
            {/* <div className={styles.text}><h2>Lauti</h2></div> */}
            <div className={styles.text}><h2>✨¡Bienvenido a tu Pokemundo!✨</h2></div>
            <Link to='/home'>
            <button className={styles.button}> Enter </button>
            </Link>
            </div>
            <div className={styles.img}>
                <img src={`${pikachu}`} width="800px"/>
            </div>
        </div>
    )

};

export default LandingPage;