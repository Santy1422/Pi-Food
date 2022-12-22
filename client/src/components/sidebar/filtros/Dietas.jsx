import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Dietas.module.css"

export const Dietas = () => {


const [seleccionadas, setSeleccionadas] = useState([])

  const dietas = useSelector((state) => state.dietas);
  const recetas2 = useSelector((state) => state.recetas2); //traigo recetas de filtros

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.filterByDiets(filtro));
    dispatch(actions.cambiarPag(1));


  }, [seleccionadas]);
  useEffect(() => {
    dispatch(actions.TraerDietas());

  }, []);

  const handleChange = (e) => {
    const name = e.target.value
    const buscar = seleccionadas.find(ele => ele === name)
    if(buscar){
      setSeleccionadas(seleccionadas.filter(dietas => dietas !== name))
    }else{
      setSeleccionadas([...seleccionadas, e.target.value])
  }
  };


 const filtroDietas = (seleccionadas, dietas) =>{
  for(const id of seleccionadas){
    const result = dietas?.find((ele) => ele == id)
    if(!result) return false
      }
  return true
 } 
 const filtro = recetas2?.filter((ele) => filtroDietas(seleccionadas, ele.diets) ) 


  return (
    <div >
      <fieldset>
        <legend>Dietas</legend>
    {dietas?.map(diet => {
            return <div key={diet.name}>
              <input type='checkbox' id={diet.id} value={diet.name} onChange={handleChange}/>
              <label>{diet.name}</label>
            </div>
        })}
        </fieldset>
    </div>
    
  );
};
