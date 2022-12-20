import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import  validate from "./validate.js";
import style from "./CrearReceta.module.css"
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
        [event.target.name]: event.target.value,
    })
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
        <div>
          <label className={style.label}>Nombre del plato:</label>
          <br/>
          <input type="text"
          placeholder="Escribe el nombre de tu receta.."
        name="name"  value={input.name} onChange={(e) => handleChange(e)} />
                  { errorInput.name && (<p>{errorInput.name}</p>)}

          <br/>

          <label className={style.label}>Descripcion:</label>
          <br/>
          
          <textarea type="text" name="summary" placeholder="Descripcion de tu receta" value={input.summary} onChange={(e) => handleChange(e)} />
          { errorInput.summary && (<p>{errorInput.summary}</p>)}
          <br/>

          <label className={style.label}>Puntaje nutricional:</label>
          <br/>

          <input type="text" name="healthScore" placeholder="¿Que puntaje nutricional posee?" value={input.healthScore} onChange={(e) => handleChange(e)} />
          { errorInput.healthScore && (<p>{errorInput.healthScore}</p>)}
          <br/>

          <label className={style.label}>Imagen:</label>
          <br/>

          <input type="text" name="image" placeholder="Por favor un enlace con la foto de tu receta" value={input.image} onChange={(e) => handleChange(e)} />
          { errorInput.image && (<p>{errorInput.image}</p>)}



          <br/>


          <label className={style.label}>Type of Diet:</label>
          <br/>

          <div
          >
            {dietas?.map((element, index) => {
              return (
                <label key={index}>
                  <input
                    key={element.id}
                    type="checkbox"
                    value={element.name}
                    name={element.name}
                    onChange={handleCheckChange}
                  />

                  {element.name}
                </label>

              );
            })}
                          { errorInput.diets && (<p>{errorInput.diets}</p>)}

          </div>
          <br/>

          <label className={style.label}>Pasos de preparacion:</label>
          <br/>

          <textarea type="text" name="steps" placeholder="Pasos para realizar la receta" value={input.steps} onChange={(e) => handleChange(e)} />
          { errorInput.steps && (<p>{errorInput.steps}</p>)}
        </div>
        {(!Object.entries(errorInput).length) ?
  <button type='submit' >Create Recipe</button>
 : ( <div><button type='submit'   disabled>Create Recipe</button>
  <p >Incomplete required fields</p></div>)
            }
      </form>
    </div>
    </div>
  );
};
