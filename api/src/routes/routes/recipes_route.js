const router = require('express').Router();
const {rece, idRece, postRecipe} = require ("../controllers/controllers.js") 
const { Recipe, Diets } = require("../../db");

router.get("/", async (req, res) => {
  const {name } = req.query;
  try{
  if(name){
      const devolver = await rece(name)
      res.status(200).json(devolver)
  }

  else{
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






router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, summary, steps, healthScore, diets, image } = req.body;
    try {
      const recipe = await Recipe.findByPk(id);
      if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
  
      await Recipe.update(
        {
          name: name,
          summary: summary,
          image: image,
          steps: steps,
          healthScore: healthScore,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (diets.length) {
        await recipe.setDiets([]);
        diets.forEach(async (e) => {
          const diet = await Diets.findOne({
            where: {
              name: e,
            },
          });
          if (diet) {
            await recipe.addDiet(diet);
          }
        });
      }
  
      // Obtener la instancia actualizada de la receta
      const updatedRecipe = await Recipe.findByPk(id, {
        include: [{ model: Diets }],
      });
      return res.status(200).json(updatedRecipe);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  });
 
module.exports = router;
