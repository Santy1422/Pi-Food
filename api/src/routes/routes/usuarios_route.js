const { Router } = require("express");

const { nuevoUsuario, obtenerTodosLosUsuarios, buscarUsuarioPorNombreYPIN } = require ("../controllers/controllers.js") 
const router = Router()

router.post("/", async (req, res) => {

    try {
        const newuse = req.body;
        if (!newuse) res.status(404).send("Missing info")
        const newRecipe = await nuevoUsuario(newuse)
  
        res.status(201).send(newRecipe)
  
    } catch (error) {
        res.status(404).send(error);
    }
  })

  router.get("/", async (req, res) => {

    try {
        const {usuario, pin} = req.query;

        const usuarioenc = await buscarUsuarioPorNombreYPIN(usuario, pin)
        res.status(201).send(usuarioenc)
    }
    catch (error) {
        res.status(404).send(error);
    }
 } )

  router.get("/search", async (req, res) => {

    try {
        const todoslosusers = await obtenerTodosLosUsuarios()
  
        res.status(201).send(todoslosusers)
  
    } catch (error) {
        res.status(404).send(error);
    }
  })



module.exports = router;
