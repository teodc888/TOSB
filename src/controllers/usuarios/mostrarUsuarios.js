const {Usuarios} = require("../../db");

async function mostrarUsuarios(req, res, next){
    try{
        const usuarios = await Usuarios.findAll();
        res.status(200).json(usuarios)
    }catch(error){
        next(error);
    }
}

module.exports = {mostrarUsuarios};