import React from "react";
import { Dietas } from "./filtros/Dietas";
import { DesAsc } from "./filtros/DesAsc";
import { Health } from "./filtros/Health";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../redux/actions"
import style from "./siderbar.module.css"
import { NormalSearch } from "../SearchBar/NormalSearch";
export const Sidebar = (props) =>{

const dispatch = useDispatch()    

const handleClick = (event) => {
    event.preventDefault();
    dispatch(actions.TraerRec())
}
    return (
        <div>
        <div className={style.side}>
        <div className={style.filterConteiner}>
            <NormalSearch/>
            <span>Ordenar Alfabeticamente</span>
            <hr></hr>
            <DesAsc/>
            <span>Puntaje nutricional</span>
            <hr></hr>

            <Health/>
            <Dietas/>
            <NavLink to="/home"> <button className={style.button} onClick={(event) => handleClick(event)}><p>Limpiar filtros</p></button></NavLink>

        </div>
        </div>
        </div>

    )
}