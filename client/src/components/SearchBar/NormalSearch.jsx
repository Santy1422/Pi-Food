import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions"
import style from "./NormalSearch.module.css"
import { useSelector } from "react-redux";
export const NormalSearch = () =>{

const dispatch = useDispatch()
const [search, setSearch] = useState("") 

const recetas2 = useSelector(state => state.recetas2)

const handleChange =(e) => {
    e.preventDefault() 
setSearch(e.target.value)
console.log(search)
}


 const payload = recetas2.filter((ele) => ele.name.includes(search)) 


useEffect(() => {
  dispatch(actions.BuscarRec(payload))
  dispatch(actions.cambiarPag(1))

}, [search])


return (
    <div>
      <hr></hr>
      <input className={style.Search}
        placeholder="Busca tu receta"  
        type="text"
        onChange={handleChange}
      />
      {/* <button className= {style.button} onClick={handleSubmit}> */}
        {/* BUSCAR
      </button> */}
      <hr></hr>
    </div>
  );
};