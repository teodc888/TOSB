const {Usuarios} = require("../../db");

async function usuarioLogeado(req, res, next){
    try{
        const {email} = req.query;
        const usuario = await Usuarios.findOne({
            where: {
                email: email
            }
        });
        if(usuario){
            res.status(200).json(usuario);
        }else{
            res.status(404).json({
                mensaje: "No existe el usuario"
            })
        }
    }catch(error){
        next(error);
    }
}

module.exports = {usuarioLogeado};