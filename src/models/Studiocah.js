const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Studiocah = sequelize.define('Studiocah', {
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
  tableName: 'studio_cah',
});

module.exports = Studiocah;
