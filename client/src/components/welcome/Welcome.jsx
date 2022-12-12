import React from "react";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions"
import style from "./Welcome.module.css"

export const Welcome = (props) => {


    return(
        <body style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/112605.jpg")' }}>
        <div className={style.centrar}>
        <section className={style.cuadrado}>
        <h1 className={style.titulo}>HENRY FOOD</h1> 
        <div className={style.wrapper}>
           <span className={style.span}>Bienvenido al mercado de recetas de Henry</span>
           <br/>
           <br/>  <br/>
           <br/>
           <Link to="/home" > <button className={style.button}><p className={style.parrafo}>Ingresar</p></button></Link>
        </div>
        </section>
        </div>
        </body>
    )
}

