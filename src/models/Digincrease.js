const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Digincrease = sequelize.define('Digincrease', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priceArgentina: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  priceUSA: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  priceEurope: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'digincrease',
});

module.exports = Digincrease;
