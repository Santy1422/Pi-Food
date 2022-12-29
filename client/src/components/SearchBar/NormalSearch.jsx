import React from "react";
import style from "./NormalSearch.module.css"
import { useSelector } from "react-redux";
export const NormalSearch = (props) =>{
  const search = useSelector(state => state.search)


return (
    <div>
      <hr></hr>
      <input className={style.Search}
        placeholder="Busca tu receta"  
        type="text"
        onChange={props.handleChange}
        value={search}
      />
      <hr></hr>
    </div>
  );
};