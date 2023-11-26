export const ALL_POKE = "ALL_POKE";
export const ID_POKE = "ID_POKE";
export const GET_NAME = "GET_NAME";

import axios from "axios";

export const allPoke = (character) => {
  try {
    const endpoint = "http://localhost:3001/pokemons";
    return async (dispatch) => {
    const {data} = await axios.get(endpoint, character);
      
      return dispatch({
      type: "ALL_POKE",
      payload: data,
    });
  };
  } catch (error) {
    console.log(error)
  }
};

export const pokeById = (id) => {
  try {
    return async (dispatch) => {
    const {data} = await axios.get(`http://localhost:3001/pokemons/${id}`);
      
      return dispatch({
      type: "ID_POKE",
      payload: data,
    });
  };
  } catch (error) {
    console.log(error)
  }
};