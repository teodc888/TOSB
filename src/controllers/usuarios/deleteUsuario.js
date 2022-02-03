const {Usuarios} = require("../../db");

async function deleteUsuarios(req, res, next){
    try{
        const {id} = req.body;
        const usuario = await Usuarios.destroy({
            where: {
                id: id 
            }
        });
        res.status(200).json({
            message: "Usuario eliminado",
            usuario
        })
    }catch(error){
        next(error);
    }
}

module.exports = {deleteUsuarios};