
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

const initialState = {
    recetas: [],
    dietas: [],
    currentPage: 1,
    recetaid: [],
}

function rootReducer(state = initialState, action) {
switch(action.type){
    case "TRAER_RECETAS":
        return{
            ...state,
            recetas: action.payload,
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
        case "BUSCAR_RECETA":
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
                const filterByDiets = state.recetas.filter((element) =>
                  element.diets.includes(action.payload) ? element : null
                );
          
                return {
                  ...state,
                  recetas: filterByDiets,
                                };
    case "ORDENAR_POR_NOMBRE": 

    const sortedLetter= action.payload === 'asc' ?
    state.recetas.sort(function(a,b){
        if (a.name > b.name){
            return 1
        }
        if (a.name < b.name){
            return -1
        }
        return 0
    }) : 
    state.recetas.sort(function(a,b){
        if (a.name > b.name){
            return -1
        }
        if (a.name < b.name){
            return 1
        }
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
              default:
                return { ...state };
            }
          }

      
export default rootReducer;