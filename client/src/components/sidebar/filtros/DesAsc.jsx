import React from "react";

import style from "./DesAsc.module.css"


export const DesAsc = (props) => {


    return (
        <div className={style.box}>
<select onChange={ e => props.HandleSort(e)}>
<option selected disabled>Alfabeticamente</option>
    <option value ="asc">Ascendente</option>
    <option value ="desc">Descendente</option>

</select>
        </div>
    )
}