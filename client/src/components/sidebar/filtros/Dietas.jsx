import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Dietas.module.css"
export const Dietas = () => {


  const dietas = useSelector((state) => state.dietas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.TraerDietas());
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(actions.filterByDiets(e.target.value));
  };

  return (
    <div >
        {dietas?.map((temp, index) => (
          <button className={style.button} onClick={(e) => handleChange(e)} value={temp.name}key={index}>   {temp.name} <br></br></button>
        ))}
    </div>
    
  );
};
