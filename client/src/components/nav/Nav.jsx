import React from "react";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useSelector } from "react-redux";
export const Nav = (props) => {
    const location = useLocation()
const recetaid = useSelector(state => state.recetaid)
console.log(props)

    return (
        <nav className={style.header}>
            {location.pathname === '/home' ? <button className={style.button2}>Inicio</button> : 
           <Link to="/home"> <button className={style.button}>Inicio</button></Link>}
            {location.pathname === '/create' ? <button className={style.button2}>Crear receta</button> : 
           <Link to="/create"> <button className={style.button}>Crear receta</button></Link>}
            <button className={style.button} >Favoritos</button>
            {location.pathname === '/detail/' + recetaid.id  ? <button className={style.button2}>Informacion</button> : 
           <button className={style.button}>Informacion</button>}
        </nav>

    )
}