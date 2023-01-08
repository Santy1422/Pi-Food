import React from "react";
import style from "./CrearReceta.module.css"
import Style from "../sidebar/filtros/Dietas.module.css"
import { Recetarender } from "../recetas/Recetarender";
import { useForm } from "./useForm";

export const CrearReceta = (props) => {

const {handleCheckChange, handleChange, handleSubmit, input, errorInput, dietas, dispatch, actions, } = useForm()

  React.useEffect(() => {

    if(!dietas.length){
   dispatch(actions.TraerDietas())  
      }
      },[]);

  return (
<div className={style.alrededor}>
    <div>
      <><h1 className={style.title}>Crear nueva receta</h1><br /></>
      
    

      <form onSubmit={() => handleSubmit()}>
      <div className={style.div}>
        <div className={style.divizq}>
          <label className={style.label}>Nombre del plato:</label>
          <br/>

          <input type="text"
          placeholder="Escribe el nombre de tu receta.."
        name="name"  value={input.name}  className={style.input} onChange={(e) => handleChange(e)} />
                  { errorInput.name ? <span className={style.ErrorName}>{errorInput.name}</span> : <p> {" "}</p>}

              
          <label className={style.label}>Descripcion:</label>
          <br/>
          
          <textarea className={style.textaerea} type="text" name="summary" placeholder="Descripcion de tu receta" value={input.summary} onChange={(e) => handleChange(e)} />
          { input.summary.length ? errorInput.summary && (<span className={style.ErrorName}>{errorInput.summary}</span> ) : <p></p>}
          <br/>

          <label className={style.label}>Puntaje nutricional:</label>
          <br/>

          <input type="text" name="healthScore" className={style.input} placeholder="¿Que puntaje nutricional posee?" value={input.healthScore} onChange={(e) => handleChange(e)} />
          { input.healthScore.length ? errorInput.healthScore && (<span className={style.ErrorName}>{errorInput.healthScore}</span>) : <p></p>}
          <br/>

          <label className={style.label}>Imagen:</label>
          <br/>

          <input type="text" name="image" className={style.input} placeholder="Por favor un enlace con la foto de tu receta" value={input.image} onChange={(e) => handleChange(e)} />
          { input.image.length ? errorInput.image && (<span className={style.ErrorName}>{errorInput.image}</span>) : <p></p>}


          <label className={style.label}>Pasos de preparacion:</label>
          <br/>
          <textarea type="text" name="steps" className={style.textaerea} placeholder="Pasos para realizar la receta" value={input.steps} onChange={(e) => handleChange(e)} />
          { errorInput.steps && (<span className={style.ErrorName}>{errorInput.steps}</span>)}
          <br/>
          </div>
          <div className={style.divderecho}>
          <br/>
          <div className={style.dietasform}>

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
     
                          { input.diets.length ? errorInput.diets && (<span className={style.ErrorName}>{errorInput.diets}</span>) : <span></span>}
                          <Recetarender input={input}/>
</div>

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