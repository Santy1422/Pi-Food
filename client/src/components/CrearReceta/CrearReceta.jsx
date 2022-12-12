import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import  validate from "./validate.js";
export const CrearReceta = (props) => {
  const dispatch = useDispatch();

  const dietas = useSelector((state) => state.dietas);
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


  const handleChange = (event) => {
    setInput({...input,
        [event.target.name]: event.target.value,
    })
    setErrorInput(validate({...input,
      [event.target.name]: event.target.value,}))
}  
const handlerSelect = (e) =>{
  if(input.diets.includes(e.target.value)) return;
      setInput({
          ...input,
          diets: [...input.diets, e.target.value]
      });

};
    const handleSubmit = (event) =>{
      // if( Object.entries(errorInput).length) {
      //   alert ("Debes corregir datos")
      //   history.push('/create')

      // }else{
        dispatch(actions.postRecipes(input))
        setInput({...input,
            name: "",
            summary: "",
            healthScore: 10,
            image: "",
            diets: [],
            steps: ""
    })
  // }
    alert("receta creada correctamente")
    history.push('/home')
  }

  return (

    <div>
      <h1>Create Recipe</h1>
      <form onSubmit={() => handleSubmit()}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Escribe el nombre de tu receta.." value={input.name} onChange={(e) => handleChange(e)} />
          { errorInput.name && (<p>{errorInput.name}</p>)}
          <label>Descripcion:</label>
          <textarea type="text" name="summary" placeholder="Descripcion de tu receta" value={input.summary} onChange={(e) => handleChange(e)} />
          { errorInput.summary && (<p>{errorInput.summary}</p>)}
          
          <label>Puntaje nutricional:</label>
          <input type="text" name="healthScore" placeholder="¿Que puntaje nutricional posee?" value={input.healthScore} onChange={(e) => handleChange(e)} />
          { errorInput.healthScore && (<p>{errorInput.healthScore}</p>)}

          <label>Imagen:</label>
          <input type="text" name="image" placeholder="Por favor un enlace con la foto de tu receta" value={input.image} onChange={(e) => handleChange(e)} />
          { errorInput.image && (<p>{errorInput.image}</p>)}





          <label>Type of Diet:</label>
          <div
            onChange={(e) => {
              handlerSelect(e);
            }}
          >
            {dietas?.map((element, index) => {
              return (
                <label key={index}>
                  <input
                    key={element.id}
                    type="checkbox"
                    value={element.name}
                    name={element.name}
                  />

                  {element.name}
                </label>

              );
            })}
                          { errorInput.diets && (<p>{errorInput.diets}</p>)}

          </div>
          <label>Pasos de preparacion:</label>
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
  );
};
