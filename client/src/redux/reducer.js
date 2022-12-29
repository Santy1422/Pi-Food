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
export const FAVORITOS = "FAVORITOS"
export const MODIFICAR_RECETA = "MODIFICAR_RECETA"
export const SELECCIONADAS = "SELECCIONADAS"
export const SEARCH = "SEARCH"
// export const FILTER_BY_VALUE = "FILTER_BY_VALUE"
const initialState = {
    recetas: [],
    recetas2: [],
    dietas: [],
    currentPage: 1,
    recetaid: [],
    seleccionadas: [],
    search: ""
}

function rootReducer(state = initialState, action) {
switch(action.type){
    case "TRAER_RECETAS":
        return{
            ...state,
            recetas: action.payload,
            recetas2: action.payload,
        }
        case "MODIFICAR_RECETA":
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
        return{
        ...state,
        recetas: [...action.payload]
       }
    case "ORDENAR_POR_NOMBRE": 
    
    
    const allRecipe = [...state.recetas];
    const sortedLetter = allRecipe.sort((a, b) => {
      if (action.payload === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    return {
      ...state,
      recetas: sortedLetter,
      currentPage: 2,
    };

case FILTRO_SCORE:
    let allRecipes = [...state.recetas]; 
    let orderByHs; 
    if (action.payload === "maximo") {
      orderByHs = allRecipes.sort((a, b) => b.healthScore - a.healthScore);
    } else {
      orderByHs = allRecipes.sort((a, b) => a.healthScore - b.healthScore);
    }
    return {
      ...state,
      recetas: orderByHs, 
      currentPage: 2,
    };




    case POST_RECIPE:
        return{
            ...state
        }
        case SELECCIONADAS:
        return{
            ...state,
            seleccionadas: [...action.payload]
        }  
        case SEARCH:
          return{
              ...state,
              search: action.payload,
          }      


   
              default:
                return { ...state };
            }
          }

      
export default rootReducer;