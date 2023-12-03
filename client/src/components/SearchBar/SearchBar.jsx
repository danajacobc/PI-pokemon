import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import styles from "../SearchBar/SearchBar.module.css"
import { searchPoke } from "../../redux/actions";

const SearchBar = ({ setCurrentPage }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    e.preventDefault();
    setName(event.target.value);
  };

  const handleButtonSubmit = () => {
    e.preventDefault();
    dispatch(searchPoke(name)); 
    setName(''); 
    setTimeout(() => setCurrentPage(1), 2000);
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" value={name} placeholder="Ingresa el nombre..." onChange={handleChange}/>
      <button className={styles.button} onClick={handleButtonSubmit}> BUSCAR 🔎 </button> 
    </div>
  );
};

export default SearchBar;