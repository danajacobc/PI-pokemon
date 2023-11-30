import { ALL_POKE, ID_POKE, RESET_DETAIL, GET_NAME, ORDER_ALF, ORDER_ATTACK, GET_TYPES, FILTER_TYPES, FILTER_ORIGIN} from "./actions";

const initialState = {
    allPokemons: [],
    detail: {},
    allPokemonsCopy: [],
    types: [],
    
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
        case RESET_DETAIL:
            return {
                ...state,
                detail: {},
            };
        case GET_NAME:

            return {
                ...state,
                allPokemons: [action.payload],
            };
        case ORDER_ALF:
            
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
            
            return {
                ...state,
                allPokemons: action.payload === "all" ? state.allPokemonsCopy : sortArr,
            };
            case GET_TYPES:
                return {
                    ...state,
                    types: action.payload,
                }

            // case FILTER_ORIGIN:
            //     let filterOr = 
            //     action.payload === "A"
            //     ? state.allPokemons.filter((o))
                
            //case FILTER_TYPES:
                


        default: return {...state};
    }
}

export default reducer;