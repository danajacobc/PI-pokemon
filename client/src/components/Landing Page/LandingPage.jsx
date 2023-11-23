import styles from "../Landing Page/LandingPage.module.css";
import {Link} from 'react-router-dom';

const LandingPage = () => {

    return (
        <div className={styles.container}>

            <p>¡Ingresa a tu Pokemundo!</p>

            <Link to='/home'>
            <button className={styles.button}> INGRESAR </button>
            </Link>
        </div>
    )

};

export default LandingPage;