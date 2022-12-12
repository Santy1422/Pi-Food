const axios = require("axios");
const  {Recipe, Diets}  = require("../../db");


//     "results": [{
//         "vegetarian": true,
//         "vegan": true,
//         "glutenFree": true,
//         "dairyFree": true,
//         "veryHealthy": true,
//         "cheap": false,
//         "veryPopular": true,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 4,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 3689,
//         "healthScore": 76,
//         "creditsText": "Full Belly Sisters",
//         "license": "CC BY-SA 3.0",
//         "sourceName": "Full Belly Sisters",
//         "pricePerServing": 112.39,
//         "id": 716426,
//         "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//         "readyInMinutes": 30,
//         "servings": 8,
//         "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
//         "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//         "imageType": "jpg",
//         "summary":


//mapeo la api
const BuscApi = async () =>{

try{   
 // const BuscarenApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=042ad0b4e08542a5a05ed730d26457c3&number=100&addRecipeInformation=true`)
    const BuscarenApi = await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)

    let info = await BuscarenApi.data.results?.map((ele) =>{ 
        

        return{
            id: ele.id,
            name: ele.title,
            summary: ele.summary,
            healthScore: ele.healthScore,
            image: ele.image,
            dishTypes: ele.dishTypes,
            diets: ele.diets?.map(element => element), 
            steps :ele.analyzedInstructions[0]?.steps.map((ele) => `${ele.number} ${ele.step}`).join(" "),
           // steps: ele.analyzedInstructions[0]?.steps.map((ele2) => {
             //   return {
               //     number: ele2.number,
                 //   step: ele2.step
                //} },
          
         //   ),
        }
    } ) 
    return info
} 
catch(err){
    return err
}
} 

//mapeo la db
const buscarenDb = async () => {
    try{
    const buscardb = await Recipe.findAll({
        include:{
            model: Diets,
            atributes: ['name'],
            through: {
                atributes: [],
            }
        }
    })
    // var dato = JSON.parse(JSON.stringify(dbInfo, null, 2));
    // dato.forEach((el) => (el.diets = el.diets.map((el) => el.name)));

    // return dato;
    let infodb = await buscardb?.map((ele) => {
    return{
        id: ele.id,
        name: ele.name,
        summary: ele.summary,
        healthScore: ele.healthScore,
        image: ele.image,
        steps: ele.steps,
        diets: ele.diets?.map(element => element.name), 
    }
   }) 
return infodb
}
catch(err){
return err
}
}

//junto la api con la db
const dbyApi = async () =>{

   try{
const api = await BuscApi()
const db = await buscarenDb()
const dbapi = api.concat(db)
return dbapi
} 
catch(err) {
    return err
}
}

//receta por query y todas si no ahi query
const rece = async (receta) => { 
try{
    //const agregarlas =  await info.filter((ele) => ele.name === receta)
    //const agregaradb = await Recipe.findOrCreate(agregarlas) ME CAGO EN HENRY ERA MAS FACIL
    if(receta){
   const buscareceta = await dbyApi()
   const resultado = buscareceta.filter((ele) => ele.name.toLowerCase().includes(receta.toLowerCase()) === true) 
   if(resultado.length)  return resultado

}else{
    const todas = await dbyApi()
    return todas
}

    throw ("No tenemos datos sobre esta receta") 
}
catch(error) {
    return error
}
}

//buscar receta por id
const idRece = async (idReceta) =>{
 try{
 const buscareceta = await dbyApi()
const receta =  buscareceta.find((ele) => ele.id == idReceta)
if(receta) {
    return receta
}
 else throw ("Ups, no tenemos una receta con ese id")
}

catch(err) {
    return err
}
}

//Mostrar dietas
const putDietInfo = async () => {
    const dietTypes = [
        "gluten free", //
        "ketogenic", //
        "lacto ovo vegetarian", //
        "vegan", //
        "pescatarian", //
        "paleolithic", //
        "primal",//
        "fodmap friendly", //
        "whole 30", //
        "dairy free", //
    ];
    dietTypes.forEach((d) => {
        Diets.findOrCreate({
            where: {
                name: d,
            }
        })
    })
    return Diets.findAll()

}

const postRecipe = async (objRecipe) => {
    try {
        const { name, summary, healthScore, steps, image, dishTypes, diets } = objRecipe;
        const recipe = {
            name,
            summary,
            healthScore,
            steps,
            image,
            dishTypes,
        }

        const dietInfo = await Diets.findAll({
            where: {
                name: diets,
            }
        })
        const createRecipe = await Recipe.create(recipe)

        createRecipe.addDiets(dietInfo)

        return Recipe.findAll()

    } catch (error) {
        console.log(error)
    }
}


 module.exports = {rece, idRece, putDietInfo,  postRecipe}

