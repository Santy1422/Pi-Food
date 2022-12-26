import React from "react";
import { useLocation } from 'react-router';

import { Link } from "react-router-dom";
import Style from "./recetarender.module.css"


export const Recetarender =(props) => {

  const location = useLocation()
      return  (
        <>
        {location.pathname !== '/create' ? 
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
        :      
        
        <div className={Style.card}>
{
  props.input.image
    ? <img className={Style.image} src={props.input.image} alt="imagen" />
    : <img className={Style.image} src="https://img1.freepng.es/20180208/ike/kisspng-de-wolkenfabriek-groninger-gezinsbode-beijum-plate-dish-knife-and-fork-vector-5a7c408427dc22.6639407515180924201633.jpg" alt="imagen" />
}        <hr></hr>
     
     {props.input.name 
     ?  <h2 className={Style.title}>{props.input.name}</h2>
    : 
    <h2 className={Style.title}>Nombre de tu plato</h2>
    }
        <hr></hr>
        <div key={props.id} className={Style.cardbody}>
          <p className={Style.cardsubtitle}>{props.input.healthScore}</p>

          <ul className={Style.cardinfo}>
            {props.input.diets?.map((element, index) => (
              <ol className={Style.ol} key={index}>
                {element}
              </ol>
            ))}
          </ul>

        </div>
      </div>
    }
        
        </>
        
      );
    };




    
