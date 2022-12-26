import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Dietas.module.css"

export const Dietas = (props) => {


  const dietas = useSelector((state) => state.dietas);

  const dispatch = useDispatch();


  useEffect(() => {
    if(!dietas.length)
    dispatch(actions.TraerDietas());

  }, []);

  return (
    <div >
      <fieldset>
        <legend className={style.body}>Dietas</legend>
    {dietas?.map(diet => {
            return <div key={diet.name}>
              <input type='checkbox' className={style.body} id={diet.id} value={diet.name} onChange={props.handleChange2}
/>
              <label className={style.body}>{diet.name}</label>
            </div>
        })}
        </fieldset>
    </div>
    
  );
};
