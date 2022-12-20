import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions"
import style from "./NormalSearch.module.css"
export const NormalSearch = () =>{

const dispatch = useDispatch()
const [search, setSearch] = useState("") 

const handleChange =(e) => {
    e.preventDefault() 
setSearch(e.target.value)
console.log(search)
}

const handleSubmit = (e) => {
    dispatch(actions.BuscarRec(search)) 
    dispatch(actions.cambiarPag(1))
console.log("search")
}

return (
    <div>
      <hr></hr>
      <input className={style.Search}
        placeholder="Busca tu receta"  
        type="text"
        onChange={handleChange}
      />
      <button className= {style.button} onClick={handleSubmit}>
        BUSCAR
      </button>
      <hr></hr>
    </div>
  );
};