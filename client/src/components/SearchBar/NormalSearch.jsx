import React from "react";
import style from "./NormalSearch.module.css"
export const NormalSearch = (props) =>{

return (
    <div>
      <hr></hr>
      <input className={style.Search}
        placeholder="Busca tu receta"  
        type="text"
        onChange={props.handleChange}
      />
      <hr></hr>
    </div>
  );
};