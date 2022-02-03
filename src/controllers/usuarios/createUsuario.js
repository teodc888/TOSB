const { Usuarios } = require("../../db.js");

async function createUsuario(req, res, next) {
  try {
    const { nombre, apellido, email, telefono, pais, ciudad, apodo, imagen, fechaNacimiento } = req.body;
    const usuario = await Usuarios.create({
      nombre,
      apellido,
      email,
      telefono,
      pais,
      ciudad,
      apodo,
      imagen,
      fechaNacimiento,

    });
    res.status(201).json({
      message: "Usuario creado",
      usuario,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {createUsuario};