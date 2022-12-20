export const TRAER_RECETAS = "TRAER_RECETAS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const TRAER_DIETAS = "TRAER_DIETAS"

export const BUSCAR_RECETA = "BUSCAR_RECETA"
export const FILTER_DIETS = "FILTER_DIETS"
export const ORDENAR_POR_NOMBRE = "ORDENAR_POR_NOMBRE"
export const CAMBIAR_PAGINA = "CAMBIAR_PAGINA"
export const FILTRO_SCORE = "FILTRO_SCORE"
export const POST_RECIPE = "POST_RECIPE"
export const RECETA_ID = "RECETA_ID"
export const VACIAR_ID = "VACIAR_ID"
export const FILTRO_CREADOS = "FILTRO_CREADOS"
// export const FILTER_BY_VALUE = "FILTER_BY_VALUE"
const initialState = {
    recetas: [],
    dietas: [],
    currentPage: 1,
    recetaid: [],
    // appliedFilters: [],
}

function rootReducer(state = initialState, action) {
switch(action.type){
    case "TRAER_RECETAS":
        return{
            ...state,
            recetas: action.payload,
            recetas2: action.payload,

        }
     case "RECETA_ID":
        return{
            ...state,
            recetaid: action.payload
        }    
        case "VACIAR_ID":
            return{
                ...state,
                recetaid: [],
                

            }  
        case "BUSCAR_RECETA": //por si me piden la de axios
          return {
            ...state,
            recetas: action.payload,  
            currentPage: 1
   
           }
    case "TRAER_DIETAS":
            return{
                ...state,
                dietas: action.payload,
            }  
            case "CAMBIAR_PAGINA":
              return{
                  ...state,
                  currentPage: action.payload
              }        
    case "FILTER_DIETS":
     let filterByDiets = state.recetas.filter((element) =>
      element.diets.includes(action.payload) ? element : null
         ); 
      return {
      ...state,
       recetas: filterByDiets,
  };
    case "ORDENAR_POR_NOMBRE": 

    const sortedLetter= action.payload === 'asc' ?
    state.recetas.sort(function(a,b){
        if (a.name > b.name)  return 1
        if (a.name < b.name)  return -1
        return 0
    }) : 
    state.recetas.sort(function(a,b){
        if (a.name > b.name) return -1
        if (a.name < b.name) return 1
         return 0
    })
return {
    ...state,
    recetas: sortedLetter,
    currentPage: 2

}

case FILTRO_SCORE:
    const allRecipes3 = [...state.recetas]
    const orderByHs =
        action.payload === "maximo"
            ? allRecipes3.sort((a, b) => {
                if (a.healthScore < b.healthScore) return 1;
                if (a.healthScore > b.healthScore) return -1;
                return 0
            })

            : allRecipes3.sort((a, b) => {
                if (a.healthScore > b.healthScore) return 1;
                if (a.healthScore < b.healthScore) return -1;
                return 0
            })

    return {
        ...state,

        recetas: orderByHs,

                currentPage: 2

    }



    case POST_RECIPE:
        return{
            ...state
        }


        // case FILTER_BY_VALUE: //buscador dinamico
        //     let newState = Object.assign({}, state);
        //     //the value received from our presentational component
        //     let value = action.payload.value;
        //     let filteredValues = state.recetas2.filter(product => { //filtro la query y la devuelvo en minuscula
        //         return product.name.toLowerCase().includes(value)
        //     });
         
        //     let appliedFilters = state.appliedFilters; //llamo al estado que va guardar el filtro
        //     if (value) {
        //         //compruebo si ya existen filtros
        //         let index = appliedFilters.indexOf(FILTER_BY_VALUE);
        //         if (index===-1)
        //             //if it doesn’t, add it.
        //             appliedFilters.push(FILTER_BY_VALUE);//si existen los agregi al estado
        //         //reflejo los productos en el nuevo estado
        //         newState.filteredProducts = filteredValues;
        //     } else {
        //         //verifico si el input esta vacio
        //         let index = appliedFilters.indexOf(FILTER_BY_VALUE);
        //         //elimino el filtro
        //         appliedFilters.splice(index, 1);
        //         if (appliedFilters.length === 0) {
        //             newState.filteredProducts = newState.products;
        //         }
        //     }
        //     return newState;  



   
              default:
                return { ...state };
            }
          }

      
export default rootReducer;