const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('diets', {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

  },
    {
      timestamps: false,
    });
};