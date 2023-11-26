import { ALL_POKE, ID_POKE } from "./actions";

const initialState = {
    allPokemons: [],
    detail: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKE:
            return { 
                ...state,  
                allPokemons: action.payload,
            };
        case ID_POKE:
            return {
                ...state,
                detail: action.payload,
            }

        default: return {...state};
    }
}

export default reducer;