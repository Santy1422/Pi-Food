import React, { useState } from "react";
import * as actions from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import style from "./Health.module.css"
export const Health = () => {


    const dispatch = useDispatch()


    const filter = (e) =>{
        e.preventDefault()
        dispatch(actions.filterH(e.target.value))
        dispatch(actions.cambiarPag(1))


    }

    return(
        
        <div className={style.box}>
<select onChange={ e => filter(e)}>
    <option value ="maximo">Mayor a menor</option>
    <option value ="desc">Menor a mayor</option>

</select>
        </div>
    )
}