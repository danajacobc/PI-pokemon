import { ALL_POKE, ID_POKE, GET_NAME, ORDER_ALF, ORDER_ATTACK } from "./actions";

const initialState = {
    allPokemons: [],
    detail: {},
    allPokemonsCopy: [],
    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POKE:
            return { 
                ...state,  
                allPokemons: action.payload,
                allPokemonsCopy: action.payload,
            };
        case ID_POKE:
            return {
                ...state,
                detail: action.payload,
            };
        case GET_NAME:

            return {
                ...state,
                allPokemons: [action.payload],
            };
        case ORDER_ALF:
            console.log(action.payload);
            let sortArray =
            action.payload === "A"
            ? state.allPokemons.sort((a, b) => {
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0;
            })
            : state.allPokemons.sort((a, b) => {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            });
            console.log('ordene', sortArray);
            return {
                ...state,
                allPokemons: action.payload === "all" ? state.allPokemonsCopy : sortArray,
            };

            case ORDER_ATTACK:
                let sortArr =
            action.payload === "A"
            ? state.allPokemons.sort((a, b) => {
                if(a.attack > b.attack) return 1;
                if(b.attack > a.attack) return -1;
                return 0;
            })
            : state.allPokemons.sort((a, b) => {
                if(a.attack > b.attack) return -1;
                if(b.attack > a.attack) return 1;
                return 0;
            });
            console.log('ordene', sortArr);
            return {
                ...state,
                allPokemons: action.payload === "all" ? state.allPokemonsCopy : sortArr,
            };

        default: return {...state};
    }
}

export default reducer;