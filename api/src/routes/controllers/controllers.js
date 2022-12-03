const axios = require("axios");
const { Recipe, Diet } = require("../../db.js");



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
    //const BuscarenApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=042ad0b4e08542a5a05ed730d26457c3&number=100&addRecipeInformation=true`)
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
            steps: ele.analyzedInstructions[0]?.steps.map((ele2) => {
                return {
                    number: ele2.number,
                    step: ele2.step,
                } },
          
            ),
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
            model: Diet,
            atributes: ['name'],
            through: {
                atributes: [],
            }
        }
    })
    let infodb = await buscardb?.map((ele) => {
    return{
        id: ele.id,
        name: ele.name,
        summary: ele.summary,
        healthScore: ele.healthScore,
        image: ele.image,
        steps: ele.steps,
        diets: ele.diets?.map(element => element), 
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

//1 funcion GET /recipes?name="...":
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

const idRece = async (idReceta) =>{
 
 const buscareceta = await dbyApi()
const receta =  buscareceta.find((ele) => parseInt(ele.id) === parseInt(idReceta))
if(receta) {
    return receta
} else{
throw ("Ups, no tenemos una receta con ese id")
}
}
module.exports = {rece, idRece}

const crearRec = async (name, summary, healthScore, steps, image, dishTypes) => {


    
}