const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('users', {

    usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pin: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  },
    {
      timestamps: false,
    });
};