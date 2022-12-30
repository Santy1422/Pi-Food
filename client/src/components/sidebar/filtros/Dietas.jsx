import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import style from "./Dietas.module.css"

export const Dietas = (props) => {


  const dietas = useSelector((state) => state.dietas);
  const seleccionadas = useSelector(state => state.seleccionadas)

  const dispatch = useDispatch();

console.log(seleccionadas)
  useEffect(() => {
    if(!dietas.length)
    dispatch(actions.TraerDietas());

  }, [dispatch]);

  return (
    <div className={style.diets}>
     
      {dietas?.map((diet) => {
        return (
          <div key={diet.name}>
            <input
              className={style.checkbox}
              type="checkbox"
              id={diet.id}
              checked={seleccionadas.includes(diet.name)}
              value={diet.name}
              name={diet.id}
              onChange={(e) =>  props.handleChange2(e)}
            />
            <label htmlFor={diet.id} className={style.name}>
              {diet.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};
