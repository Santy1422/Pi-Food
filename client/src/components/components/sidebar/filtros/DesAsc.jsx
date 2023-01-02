import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./DesAsc.module.css"


export const DesAsc = (props) => {


    const dispatch = useDispatch();



const HandleSort = (e) =>{
    e.preventDefault()
    dispatch(actions.OrdPorNombre(e.target.value))
    dispatch(actions.cambiarPag(1))

}

    return (
        <div className={style.box}>
<select onChange={ e => HandleSort(e)}>
<option selected disabled>Alfabeticamente</option>
    <option value ="asc">Ascendente</option>
    <option value ="desc">Descendente</option>

</select>
        </div>
    )
}