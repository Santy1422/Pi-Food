import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useHistory } from "react-router-dom";
import  validate from "./validate.js";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useForm = () =>{
const dispatch = useDispatch();

const dietas = useSelector((state) => state.dietas);
const recetas = useSelector((state) => state.recetas);
const history = useHistory();
const {id} = useParams()
const recetaId = useSelector(state => state.recetaid)


const [input, setInput] = useState({
    name: "",
    summary: "",
    healthScore:10,
    image:"",
    diets:[],
    steps:"",

  });

const [errorInput, setErrorInput] = useState({
  name: "",
  summary: "",
  healthScore: 10,
  image: "",
  diets: [],
  steps: ""

});

const handleSubmitUpdate = (event) =>{
    dispatch(actions.modificar(id, input))
    dispatch(actions.check(true))
    setInput({...input,
        name: "",
        summary: "",
        healthScore: 10,
        image: "",
        diets: [],
        steps: ""
})
alert("receta creada correctamente")
history.push('/detail/' + id)
}

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
    let verificarNombre = recetas.find((ele) => ele.name === event.target.value)
    if(verificarNombre) errorInput.name = "Nombre repetido"
    else{
    setInput({...input,
        [event.target.name]: event.target.value,})
    setErrorInput(validate({...input,
      [event.target.name]: event.target.value,}, recetas))
}  }
    const handleSubmit = (event) =>{
        dispatch(actions.postRecipes(input))
        dispatch(actions.check(true))

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

  return {handleCheckChange, handleChange, handleSubmit, input, errorInput, dietas, dispatch, actions, handleSubmitUpdate,recetaId, id, history, setInput}
}