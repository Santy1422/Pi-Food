import React from "react";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import { useSelector } from "react-redux";
import { useState } from "react";
import {Sidebar} from "../sidebar/Sidebar"
export const Nav = (props) => {
    const [celular, setCelular] = useState(false)

    const location = useLocation()
const recetaid = useSelector(state => state.recetaid)

    return (
<div>
        <nav className={style.header}>
         <div>
            {location.pathname === '/home' ? <button className={style.button2}>Inicio</button> : 
           <Link to="/home"> <button className={style.button}>Inicio</button></Link>}
            {location.pathname === '/create' ? <button className={style.button2}>Crear receta</button> : 
           <Link to="/create"> <button className={style.button}>Crear receta</button></Link>}

            {location.pathname === '/detail/' + recetaid.id  ? <button className={style.button2}>Informacion</button> : 
           <button className={style.button}>Informacion</button>}
           </div>
           
            {!celular ?            <><Link to="/home"> <button className={style.celular3}>Inicio</button></Link><Link to="/create"> <button className={style.celular3}>Crear receta</button></Link></> : <p>
            </p>}
           {location .pathname === "/home" ? !celular ?
            <button className={style.celular} onClick={() => setCelular(true)}>
|||</button>:

<div className={style.divcel}>

<Sidebar />
<button className={style.celular2} onClick={() => setCelular(false)}>x</button>  
</div> 
: <></>}
        </nav>
        </div>
    
    )
}