import React from "react";
import { Recetarender } from "./Recetarender";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions"
import {Pagination} from "../Pagination/Pagination.jsx";
import { useState, useEffect } from "react";
import { Cargando } from "../Cargando/Cargando";
import { SinRecetas } from "../Cargando/SinRecetas";
import style from "./receta.module.css"

export const Recetas = (props) => {
    const dispatch = useDispatch()

const recetas = useSelector(state => state.recetas)  
// const orden = useSelector(state => state.recetas)  
const currentPage = useSelector(state => state.currentPage)  

const [loading, setLoading] = useState(false)



 const [charactersPerPage, setCharactersPerPage] = useState(9); //cuantas recetas x pagina
 const indexOfLastCharacter = currentPage * charactersPerPage; //pagina x cantidad  recetas en pagina
 const indexOfFirsChararacter = indexOfLastCharacter - charactersPerPage;
 const currentCharacters = recetas.slice(indexOfFirsChararacter, indexOfLastCharacter); //agarra el indice del primero y del ultimo pj

//   const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber)
//  }

useEffect(() => {

    setTimeout(() => {
        dispatch(actions.TraerRec());

        setLoading(true)

    }, 1000); 
  }, []);
if(!recetas.length){
    return(
        <div>
            <SinRecetas/>
            </div>
    )
}else{
return (
<div>
{!loading && <Cargando/>}
    <section className={style.containerCards}>
     {currentCharacters?.map((ele, index) => (
      <Recetarender 
     id= {ele.id}
     name={ele.name}
        image={ele.image}
       summary={ele.summary} 
       key={index} 
       healthScore={ele.healthScore} 
       diets={ele.diets}
        createdInDb={ele.createdInDb}/> ))}
     </section>
     
     <Pagination
                charactersPerPage={charactersPerPage}
                recetas={recetas.length}
                currentPage={currentPage}
            />

            
      </div>
)}
}
