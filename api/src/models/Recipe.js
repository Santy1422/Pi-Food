const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID, //deja llegar numeros y letras
      defaultvalue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,

    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.FLOAT,
    },
    steps: {
      type: DataTypes.ARRAY(DataTypes.JSON),
    },
    image: {
      type: DataTypes.STRING,
    },
    
    dishTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    timestamps: false,
  });

};