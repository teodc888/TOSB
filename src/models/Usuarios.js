const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('usuarios', {
    id: {
      //add uui
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,

    },
    apellido:{
      type: DataTypes.STRING,

    },
    apodo: {
      type: DataTypes.STRING,
    },
    imagen:{
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    telefono:{
      type: DataTypes.STRING,
    },
    pais:{
      type: DataTypes.STRING,
    },
    ciudad:{
      type: DataTypes.STRING,
    },
    fechaNacimiento:{
      type: DataTypes.STRING,
    },
  }, 
  {
    createdAt: false,
    updatedAt: false,
  }
  );
};
