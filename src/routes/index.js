const { Router } = require('express');
const express = require("express");
const router = Router();
const Usuarios = require("./Usuarios.js");

router.use(express.json());
router.use("/usuarios", Usuarios);



module.exports = router;
