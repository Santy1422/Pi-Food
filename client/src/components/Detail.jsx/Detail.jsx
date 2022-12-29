import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as actions from "../../redux/actions";
import style from "./Detail.module.css"
import { Cargando } from "../Cargando/Cargando";
import { Nav } from "../nav/Nav";
export const Detail = (props) =>{
  
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
  }, [dispatch]);

  function removeLinks(html) {
    // Crea un elemento div temporal
    const temp = document.createElement('div');
    // Asigna la cadena de texto HTML al contenido del elemento div
    temp.innerHTML = html;
    // Obtiene todas las etiquetas a del elemento div
    const links = temp.getElementsByTagName('a');
    // Recorre todas las etiquetas a y elimina el atributo href
    for (let i = 0; i < links.length; i++) {
      links[i].removeAttribute('href');
    }
    // Devuelve el contenido del elemento div sin los enlaces
    return temp.innerHTML;
  }
  const htmlWithoutLinks = removeLinks(recetaId.summary);

return (
  <><div>
    <Nav />
  </div>

  <div className={style.alrededor}>
      {loading ? <Cargando /> :

        <>
          {id.length > 6 ? 
            <Link to={"/modificar/" + id}>
              <button className={style.button}>Modificar </button></Link>
          
           : null}
        <div className={style.titulo}>
          <h1>{recetaId?.name}</h1>
          <hr></hr>
          <p>
            
<h3>Detalles del plato</h3>
            <p dangerouslySetInnerHTML={{ __html: htmlWithoutLinks }} /></p>
            
        </div><div className={style.div}>
            <div className={style.divizq}>
              <img src={recetaId?.image} alt={recetaId.name} className={style.image} />
            </div>

            <div className={style.divderecho}>
              <fieldset className={style.field}>
                <legend>Informacion</legend>
                <h3> Puntaje nutricional: {recetaId?.healthScore}</h3>

                {recetaId?.diets?.map((ele, index) => <h3 key={index}>{ele}</h3>)}
              </fieldset>

            </div>

          </div>
          <div>
            <hr></hr>
            <br></br>
            {recetaId?.steps ?
              <fieldset>
                <legend>Pasos de preparacion</legend>

                {recetaId?.steps}
              </fieldset>
              : <p></p>}
          </div><p></p></>}

    </div></>

)
}