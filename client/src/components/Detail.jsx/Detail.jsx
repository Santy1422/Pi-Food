import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions";
import style from "./Detail.module.css"
import { Cargando } from "../Cargando/Cargando";
import { useState } from "react";
export const Detail = (props) =>{
  console.log(props)
     const { id } = useParams();

const dispatch = useDispatch()
const recetaId = useSelector(state => state.recetaid)
const [loading, setLoading] = useState(true)    


  useEffect(() => {
    dispatch(actions.RecetaID(id));
    const timer = setTimeout(() => {
        setLoading(false)

    }, 3000);  
    return () => clearTimeout(timer);
  }, []);


return (
    <div className={style.alrededor}>
      {loading ? <Cargando/> :

      <><div className={style.titulo}>
        <h1>{recetaId?.name}</h1>
        <h3> Puntaje nutricional: {recetaId?.healthScore}</h3>
      </div><div>
          <img src={recetaId?.image} alt={recetaId.name} />
          {recetaId?.diets?.map((ele, index) => <h3 key={index}>{ele}</h3>)}
        </div><p>{recetaId?.steps}</p><p><p dangerouslySetInnerHTML={{ __html: recetaId?.summary }} /></p></> 
}
  </div>

)
}