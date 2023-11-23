import { ADD_FAV, GET_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    myFavoritesCopy: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };

            case GET_FAV:
                return { 
                    ...state, 
                    myFavorites: action.payload
                };

            case REMOVE_FAV:
                return { 
                    ...state, 
                    myFavorites: action.payload
                };

                // const filteredFavs = state.myFavorites.filter((c) => c.id != action.payload) //!== Number(action.payload)),
                // return {
                //     ...state,
                //     myFavorites: filteredFavs,
                //     allCharacters: filteredFavs,
                // }

            case FILTER:
                if(action.payload === "All"){
                     return {
                        ...state,
                        myFavorites: state.allCharacters,
                    }
                }
               return {
                ...state,
                myFavorites: state.allCharacters.filter((c) => c.gender === action.payload),
               }

            case ORDER:
                const ordenAscendente = action.payload === "A";

               const ordenado = [...state.allCharacters].sort((a, b) => {
                if(ordenAscendente) {
                    return a.id - b.id
                } else {
                    return b.id - a.id
                }
               })

                return {
                ...state,
                allCharactersCopy: state.allCharacters,
                myFavorites: ordenado,
                }

        default: return {...state};
    }
}

export default reducer;