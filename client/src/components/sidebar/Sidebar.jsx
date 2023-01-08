import React from "react";
import { Dietas } from "./filtros/Dietas";
import { DesAsc } from "./filtros/DesAsc";
import { Health } from "./filtros/Health";
import style from "./siderbar.module.css"
import { NormalSearch } from "../SearchBar/NormalSearch";
import { useEffect } from "react";
import {useFilter} from "./useFilter"


export const Sidebar = (props) =>{

const {HandleSort, seleccionadas, search, dispatch, actions, handleChange2, handleChange, filtro, handleClick, filter} = useFilter(props)

useEffect(() => {

    dispatch(actions.filterByDiets(filtro));
    dispatch(actions.cambiarPag(1));
  }, [search, seleccionadas])


    return (
        <div>
        <div className={style.side}>
        <div className={style.filterConteiner}>
            <NormalSearch handleChange={handleChange} />
            <hr></hr>
            <DesAsc HandleSort={HandleSort}/>
            <hr></hr>

            <Health filter={filter}/>
            <Dietas handleChange2={handleChange2}  />
            <button className={style.button} onClick={(event) => handleClick(event)}><p>Limpiar filtros</p></button>
   

        </div>
        </div>

        </div>

    )
}