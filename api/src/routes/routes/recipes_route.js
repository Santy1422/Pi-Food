const router = require('express').Router();
const {rece, idRece, postRecipe  } = require ("../controllers/controllers.js") 
const { Recipe, Diets } = require("../../db");

router.get("/", async (req, res) => {
    const {name } = req.query;
    try{
    if(name){
        const devolver = await rece(name)
        res.status(200).json(devolver)
    }else{
        const todas = await rece()
        res.status(200).json(todas)
    }
} 
catch(err){
    res.status(400).send(err)
}
})


router.post("/", async (req, res) => {

  try {
      const objRecipe = req.body;
      if (!objRecipe) res.status(404).send("Missing info")
      const newRecipe = await postRecipe(objRecipe)

      res.status(201).send(newRecipe)

  } catch (error) {
      res.status(404).send(error);
  }
})



router.get("/:idReceta", async (req, res) => {
    const {idReceta } = req.params;
    try{

        const IdRec = await idRece(idReceta)
        res.status(200).json(IdRec)
    }
catch(err){
    res.status(400).send(err)
}
})



module.exports = router;
