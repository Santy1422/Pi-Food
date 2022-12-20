import React from "react";
import * as actions from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./DesAsc.module.css"


export const DesAsc = () => {

const currentPage = useSelector(state => state.currentPage)  

    const dispatch = useDispatch();

const [order, setOrder] = useState(``)


const HandleSort = (e) =>{
    e.preventDefault()
    dispatch(actions.OrdPorNombre(e.target.value))
    dispatch(actions.cambiarPag(1))


    setOrder(`Ordered by ${e.target.value}`)

}

    return (
        <div className={style.box}>
<select onChange={ e => HandleSort(e)}>
    <option value ="asc">Ascendente</option>
    <option value ="desc">Descendente</option>

</select>
        </div>
    )
}