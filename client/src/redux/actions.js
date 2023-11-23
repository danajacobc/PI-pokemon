export const ADD_FAV = "ADD_FAV";
export const GET_FAV = "GET_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
import axios from "axios";

export const addFav = (character) => {
  try{
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => { //es una clouser = action creator async
    const {data} = await axios.post(endpoint, character);
      
      return dispatch({
      type: "ADD_FAV",
      payload: data,
    });
  };
} catch (error) {
  console.log(error)
}
};

export const getFav = (character) => {
  try{
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => { //es una clouser = action creator async
    const {data} = await axios.get(endpoint, character);
      
      return dispatch({
      type: "GET_FAV",
      payload: data,
    });
  };
} catch (error) {
  console.log(error)
}
};

export const findFav = () => {
  try {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" ;
  return async (dispatch) => {
    const {data} = await axios.delete(endpoint);
    return dispatch({
      type: "REMOVE_FAV",
      payload: data,
    });
  };
  } catch(error) {
  console.log(error);
  }
}

export const removeFav = (id) => {
  try {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    const {data} = await axios.delete(endpoint);
    return dispatch({
      type: "REMOVE_FAV",
      payload: data,
    });
  };
  } catch(error) {
  console.log(error);
  }
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden,
  };
};
