const { Router } = require('express');
const recipes = require("./routes/recipes_route")
const diets = require("./routes/diets_route")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes),
router.use("/diets", diets)

module.exports = router;
