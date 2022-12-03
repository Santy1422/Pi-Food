const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('diet', {
    id: {
      type: DataTypes.STRING,

       primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  });

};