import React from "react";
import style from "./Health.module.css"
export const Health = (props) => {


    return(
        
        <div className={style.box}>
<select onChange={ e => props.filter(e)}>
<option selected disabled>Puntaje nutricional</option>
    <option value ="maximo">Mayor a menor</option>
    <option value ="desc">Menor a mayor</option>

</select>
        </div>
    )
}