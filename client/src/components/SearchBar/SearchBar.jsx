import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import styles from "../SearchBar/SearchBar.module.css"
import { searchPoke } from "../../redux/actions";

const SearchBar = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value);
    
  };

  const handleButtonSubmit = () => {
    dispatch(searchPoke(name)); 
    setName(''); 
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" placeholder="Ingresa el nombre..." onChange={handleChange}/>
      <button className={styles.button} onClick={handleButtonSubmit}> BUSCAR </button> 
    </div>
  );
};

export default SearchBar;