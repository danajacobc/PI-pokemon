import { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css"

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    
  };

  const handleButtonSubmit = () => {
    onSearch(name); 
    setName(''); 
  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" placeholder="Ingrese el nombre" value={id} onChange={handleChange}/>
      <button className={styles.button} onClick={handleButtonSubmit}>Buscar</button> 
    </div>
  );
};

export default SearchBar;