import axios from "axios"
import { TRAER_RECETAS, VACIAR_ID, CAMBIAR_PAGINA, BUSCAR_RECETA, TRAER_DIETAS, FILTER_DIETS, ORDENAR_POR_NOMBRE, FILTRO_SCORE , RECETA_ID} from "./reducer";

export const TraerRec = () => {
    return async (dispatch) => {
        let recetas = await axios.get(`http://localhost:3001/recipes`)
        return  dispatch({type: TRAER_RECETAS, payload: recetas.data});
      };

    
}


export const RecetaID = (id) => {

    return async (dispatch) => {
        let receta = await axios.get(`http://localhost:3001/recipes/${id}`)
        return dispatch({type: RECETA_ID, payload: receta.data})
    }
}
export const TraerDietas = () => {

    return async (dispatch) => {
        let receta = await axios.get(`http://localhost:3001/diets`)
        return dispatch({type: TRAER_DIETAS, payload: receta.data})
    }
}

export const filterByDiets = (payload) => {
    return {
      type: FILTER_DIETS,
      payload: payload
    };
  };

export const OrdPorNombre = (payload)=> {
    return {
        type: ORDENAR_POR_NOMBRE,
        payload,
      };
 }     
 export const VaciarId = () =>{
    return{
        type: VACIAR_ID
    }
 }
 export const cambiarPag = (Pagenumber) => {
    return{
     type: CAMBIAR_PAGINA,
    payload: Pagenumber++
    } }
    export const cambiarPag2 = (Pagenumber) => {
        return{
         type: CAMBIAR_PAGINA,
        payload: Pagenumber--
        } }
    export const filterH = (payload)=> {
        return {
            type: FILTRO_SCORE,
            payload,
          };
     } 

 


     export const postRecipes = (payload) => {
        return async function () {

            const postRecipe = await axios.post("http://localhost:3001/recipes", payload)
            return postRecipe
    
        }
    }
