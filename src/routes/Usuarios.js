const { Router } = require("express");
const router = Router();
const {createUsuario} = require("../controllers/usuarios/createUsuario");
const {mostrarUsuarios} = require("../controllers/usuarios/mostrarUsuarios");
const {deleteUsuarios} = require("../controllers/usuarios/deleteUsuario");
const {usuarioLogeado} = require("../controllers/usuarios/usuarioLogeado");
router.post("/", createUsuario);
router.get("/", mostrarUsuarios);
router.delete("/", deleteUsuarios);
router.post("/logeado", usuarioLogeado);

module.exports = router;
