import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import  validate from "./validate.js";
import style from "./CrearReceta.module.css"
import Style from "../sidebar/filtros/Dietas.module.css"
import { Recetarender } from "../recetas/Recetarender";


export const CrearReceta = (props) => {
  const dispatch = useDispatch();

  const dietas = useSelector((state) => state.dietas);
  const recetas = useSelector((state) => state.recetas);
  const history = useHistory();

  const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore: 10,
    image: "",
    diets: [],
    steps: ""

  });
  const [errorInput, setErrorInput] = useState({
    name: "",
    summary: "",
    healthScore: 10,
    image: "",
    diets: [],
    steps: ""

  });

  useEffect(() => {
    if(!dietas.lenth)
    dispatch(actions.TraerDietas());
  }, [dispatch]);

  const handleCheckChange = (e) => {
    if(e.target.checked){
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })

        setErrorInput(validate({
            ...input,
            diets: [...input.diets, e.target.value]
        }, recetas 
        ))
    }else {
        setInput({
            ...input,
            diets: input.diets.filter(t => t !== e.target.value)
        })

        setErrorInput(validate({
            ...input,
            diets: input.diets.filter(t => t !== e.target.value)
        }, recetas))
    }
}
  const handleChange = (event) => {
    setInput({...input,
        [event.target.name]: event.target.value,})
    setErrorInput(validate({...input,
      [event.target.name]: event.target.value,}, recetas))
}  

    const handleSubmit = (event) =>{
        dispatch(actions.postRecipes(input))
        setInput({...input,
            name: "",
            summary: "",
            healthScore: 10,
            image: "",
            diets: [],
            steps: ""
    })
    alert("receta creada correctamente")
    history.push('/home')
  }

  return (
<div className={style.alrededor}>
    <div>
      <h1 className={style.title}>Crear nueva receta</h1>
      <br/>

      

      <form onSubmit={() => handleSubmit()}>
      <div className={style.div}>
        <div className={style.divizq}>
          <label className={style.label}>Nombre del plato:</label>
          <br/>

          <input type="text"
          placeholder="Escribe el nombre de tu receta.."
        name="name"  value={input.name}  className={style.input} onChange={(e) => handleChange(e)} />
                  { errorInput.name ? <p>{errorInput.name}</p> : <p> {" "}</p>}


          <label className={style.label}>Descripcion:</label>
          <br/>
          
          <textarea className={style.textaerea} type="text" name="summary" placeholder="Descripcion de tu receta" value={input.summary} onChange={(e) => handleChange(e)} />
          { input.summary.length ? errorInput.summary && (<p>{errorInput.summary}</p> ) : <p></p>}
          <br/>

          <label className={style.label}>Puntaje nutricional:</label>
          <br/>

          <input type="text" name="healthScore" className={style.input} placeholder="¿Que puntaje nutricional posee?" value={input.healthScore} onChange={(e) => handleChange(e)} />
          { input.healthScore.length ? errorInput.healthScore && (<p>{errorInput.healthScore}</p>) : <p></p>}
          <br/>

          <label className={style.label}>Imagen:</label>
          <br/>

          <input type="text" name="image" className={style.input} placeholder="Por favor un enlace con la foto de tu receta" value={input.image} onChange={(e) => handleChange(e)} />
          { input.image.length ? errorInput.image && (<p>{errorInput.image}</p>) : <p></p>}


          <label className={style.label}>Pasos de preparacion:</label>
          <br/>
          <textarea type="text" name="steps" className={style.textaerea} placeholder="Pasos para realizar la receta" value={input.steps} onChange={(e) => handleChange(e)} />
          { errorInput.steps && (<p>{errorInput.steps}</p>)}
          <br/>
          </div>
          <div className={style.divderecho}>
          <label className={style.label}>Tipo de dieta:</label>
          <br/>

          <div className={Style.diets}>
     
     {dietas?.map((diet) => {
       return (
         <div key={diet.name}>
           <input
             className={Style.checkbox}
             type="checkbox"
             id={diet.id}
             value={diet.name}
             onChange={handleCheckChange}
           />
           <label htmlFor={diet.id} className={Style.name}>
             {diet.name}
           </label>
         </div>
       );
     })}
                          { errorInput.diets && (<p>{errorInput.diets}</p>)}
                          <Recetarender input={input}/>

          </div>

        </div>

        </div>

        {(!Object.entries(errorInput).length) ?
      
  <button className={style.button2} type='submit' >Crear nueva receta</button>
 : ( <div><button className={style.button2} type='submit'   disabled>Crear nueva receta</button>
  <p >Completa todos los campos para crear tu nueva receta</p></div>)
            }
      </form>
   
    </div>
    </div>
  );
};