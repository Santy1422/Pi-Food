import React from "react";
import { Link } from "react-router-dom";
import style from "./recetarender.module.css"
export const Recetarender =(props) => {



    return (
        <card className={style.card}>
          <div key={props.id}>
            <Link to={"/detail/" + props.id}>
              <img className={style.img} src={props.image} alt={props.name} />
            </Link>
            <h2 className={style.title}>{props.name}</h2>
            <p>{props.healthScore}</p>
            <ul className={style.ul}>
              {props.diets?.map((element, index) => (
                <button className={style.dietas} key={index}>
                  {element}
                </button>
              ))}
            </ul>
          </div>
        </card>
      );
    };