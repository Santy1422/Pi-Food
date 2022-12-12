import React from "react";
import { Dietas } from "./filtros/Dietas";
import { DesAsc } from "./filtros/DesAsc";
import { Health } from "./filtros/Health";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../redux/actions"
import style from "./siderbar.module.css"

export const Sidebar = (props) =>{

const dispatch = useDispatch()    

const handleClick = (event) => {
    event.preventDefault();
    dispatch(actions.TraerRec())
}
    return (
        <div className={style.side}>
        <div className={style.filterConteiner}>
            <Dietas/>
            <DesAsc/>
            <Health/>
            <button onClick={(event) => handleClick(event)}><NavLink to="/home"><p>Reset</p></NavLink></button>
        </div>
        </div>

    )
}