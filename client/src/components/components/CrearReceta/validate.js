let validateUrl = /(http(s?):)([/|.|\w|\s|-])*.(?:jpg|gif|png)/;

const validate = (input) => {

    const errors = {}
    if (input.name === "" || /[^a-zA-Z, ]/g.test(input.name)) {
        errors.name = "El nombre no puede tener simbolos"
    } else if (input.summary?.length < 10) {
        errors.summary = "Tu receta necesita una descripcion"
    } else if (input.healthScore === "" || input.healthScore < 10 || input.healthScore > 100) {
        errors.healthScore = "Agrega un score alimitencio entre el 10 y el 100"
    } else if (!validateUrl.test(input.image)) {
        errors.image = "Ups, la imagen no es valida";
    }else if (input.diets.length === 0) {
        errors.diets = "Necesitas agregar al menos una dieta"
    }
    return errors

}
  export default validate;