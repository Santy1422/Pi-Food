const { Router } = require('express');
const { route } = require('../app');
const recipes = require("./routes/recipes_route")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipes)

module.exports = router;
