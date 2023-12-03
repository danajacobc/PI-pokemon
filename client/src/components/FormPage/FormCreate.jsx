import React from "react";
import { useEffect, useState } from "react";
import styles from "../FormPage/FormCreate.module.css";
import { useSelector, useDispatch } from "react-redux";
import { pokeCreate, getTypes } from "../../redux/actions";
import { Link } from "react-router-dom";

const validation = (input, pokemons) => {
  let errors = {};

  if (!input.name || !/^[ a-zA-Z ]+$/.test(input.name))
    errors.name = "Ingrese un nombre que contenga solo letras.";
  if (input.name.length < 2 && input.name.length > 16)
    errors.name = "El nombre debe tener entre 2 y 15 caracteres.";
  if (pokemons.some((e) => e.name === input.name))
    errors.name = "El nombre ingresado ya existe.";
  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(input.image))
    errors.image = "La imagen debe ser proporcionada a través de URL.";
  if (input.hp > 350) errors.hp = "El valor HP máximo es 350";
  if (input.attack > 500) errors.attack = "El valor Attack máximo es 500";
  if (input.defense > 500) errors.defense = "El valor Defense máximo es 500";
  if (input.height <= 0 || input.height > 1000)
    errors.height = "La altura mínima es 1 y máxima es 1000";
  if (input.weight <= 0 || input.weight > 700)
    errors.weight = "El peso mínimo es 1 y máximo es 700";
  if (input.types.length === 0)
    errors.types = "Debes elegir al menos 1 types, el máximo son 2 types.";

  return errors;
};

const habilitedButton = (b) => {
  if (Object.keys(b).length === 0) return false;
  return true;
};

const FormCreate = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.allPokemonsCopy);
  const allTypes = useSelector((state) => state.types);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  const [errors, setErrors] = useState({
    name: " ",
    image: " ",
    hp: "Required HP",
    attack: "Required Attack",
    defense: "Required Defense",
    speed: " ",
    height: "Value between 0 - 1000",
    weight: "Value between 0 - 700",
    types: [],
  });

  const [button, setButton] = useState(true);

  useEffect(() => {
    setButton(habilitedButton(errors));
  }, [errors]);

  const handleSelect = (e) => {
    const type = e.target.value;
    const newTypes = input.types;
    newTypes.push(type.charAt(0).toUpperCase() + type.slice(1));
    setInput({ ...input, types: newTypes });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("me ejecute");
    dispatch(pokeCreate(input));
    alert("Pokémon create! 👌");
    setInput({
      name: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation(
        {
          ...input,
          [e.target.name]: e.target.value,
        },
        pokemons
      )
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerNav}>
        <div>
          <h1>¡Crea tu propio Pokémon!</h1>
        </div>
        <Link to="/home">
          <button className={styles.button}>Home</button>
        </Link>
      </div>
      <div className={styles.containerForm}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.inputContainer}>
            <label>Name: </label>
            <input
              className={styles.input}
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChange(e)}
              placeholder="Pokémon name"
            />
            {errors.name && <p className={styles.inputError}>{errors.name}</p>}
          </div>
          <div className={styles.inputContainer}>
          <label>Image: </label>
          <input
            className={styles.input}
            type="url"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
            placeholder="URL image"
          />
          {errors.image && <p className={styles.inputError}>{errors.image}</p>}
          </div>
          <div className={styles.inputContainer}>
          <label>HP: </label>
          <input
            className={styles.input}
            type="number"
            value={input.hp}
            name="hp"
            onChange={(e) => handleChange(e)}
            placeholder="Pokémon HP"
          />
          {errors.hp && <p className={styles.inputError}>{errors.hp}</p>}
          </div>
          <div className={styles.inputContainer}>
          <label>Attack: </label>
          <input
            className={styles.input}
            type="number"
            value={input.attack}
            name="attack"
            onChange={(e) => handleChange(e)}
            placeholder="Pokémon attack"
          />
          {errors.attack && <p className={styles.inputError}>{errors.attack}</p>}
          </div>
          <div className={styles.inputContainer}>
          <label>Defense: </label>
          <input
            className={styles.input}
            type="number"
            value={input.defense}
            name="defense"
            onChange={(e) => handleChange(e)}
            placeholder="Pokémon defense"
          />
          {errors.defense && <p className={styles.inputError}>{errors.defense}</p>}
          </div>
          <div className={styles.inputContainer}>
          <label>Speed: </label>
          <input
            className={styles.input}
            type="number"
            value={input.speed}
            name="speed"
            onChange={(e) => handleChange(e)}
            placeholder="Pokémon speed"
          />
          </div>
          <div className={styles.inputContainer}>
          <label>Height: </label>
          <input
            className={styles.input}
            type="number"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
            placeholder="Pokémon height"
          />
          {errors.height && <p className={styles.inputError}>{errors.height}</p>}
          </div>
          <div className={styles.inputContainer}>
          <label>Weight: </label>
          <input
            className={styles.input}
            type="number"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
            placeholder="Pokémon weight"
          />
          {errors.weight && <p className={styles.inputError}>{errors.weight}</p>}
          </div>
          <div>
            <h3>{input.types}</h3>
            <select
              className={styles.button}
              name="filterType"
              id="filterType"
              onChange={(e) => handleSelect(e)}
              defaultValue="select"
              disabled={input.types.length === 2}
            >
              <option value="select" disabled>
                Select Type
              </option>
              {allTypes?.map((t, i) => {
                return (
                  <option value={t.name} key={i}>
                    {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
                  </option>
                );
              })}
            </select>
            {errors.types && <p className={styles.inputError}>{errors.types}</p>}
          </div>

          <button className={styles.button} type="submit">
            Create My Pokémon
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormCreate;
