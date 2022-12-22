import React from "react";
import { Link } from "react-router-dom";
import Style from "./recetarender.module.css"
import {Cargando} from "../Cargando/Cargando"
export const Recetarender =(props) => {



      return props.name ? (
        <div className={Style.card}>
          <img className={Style.image} src={props.image} alt="imagen" />
          <hr></hr>

          <h2 className={Style.title}>{props.name}</h2>
          <hr></hr>
          <div key={props.id} className={Style.cardbody}>
            <p className={Style.cardsubtitle}>{props.healthScore}</p>

            <ul className={Style.cardinfo}>
              {props.diets?.map((element, index) => (
                <ol className={Style.ol} key={index}>
                  {element}
                </ol>
              ))}
            </ul>

            <Link className={Style.textd}to={"/detail/" + props.id}>
              <button className={Style.cardbtn}>informacion</button>
            </Link>{" "}
          </div>
        </div>
      ) : (
        <Cargando />
      );
    };




    