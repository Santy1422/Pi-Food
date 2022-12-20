const validate = (input, recetas) =>{


    var nombre = /^[a-zA-Z ]{1,30}$/;
    var steps = /^[a-zA-Z0-9 ]{1,500}$/;

    var num10a100 = /^[0-9]{1,2}$/;
    var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

let errorInput = {

}   

if(!input.name) errorInput.name = "Se requiere un nombre para la receta"
if(!nombre.test(input.name))  errorInput.name='El nombre de tu receta debe ser con letras de A la Z'
const repetidas = recetas.find((ele) => ele.name == input.name)
if(repetidas)  errorInput.name='Ups, la receta ya existe en nuestra base de datos.'

if(!input.healthScore) errorInput.healthScore = "Por favor introduce un puntaje nutricional"
if(!num10a100.test(input.healthScore))  errorInput.healthScore='El puntaje nutricial debe ser del 10 al 100'

if(!/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/.test(input.image)) errorInput.image = "Debes insertar una imagen con un enlace seguro (https) y formato jpg, jpeg, png o gift"

if(!steps.test(input.steps)) errorInput.steps = "Tus indicaciones no deben superar los 500 Caracteres"
if(!input.steps) errorInput.steps = "No te olvides de indicarnos como preparar la receta"

if(!input.summary) errorInput.summary = "¡Ups!, se te esta olvidando agregar una descripcion"
if(!steps.test(input.summary)) errorInput.summary = "Tu descripcion solo puede contener numeros del 1 al 10, letras hasta 500 caracteres"


if(!input.diets.length) errorInput.diets = "¡Ups!, por favor agrega a que tipo de dieta se adapta tu receta"

return errorInput

}
export default validate