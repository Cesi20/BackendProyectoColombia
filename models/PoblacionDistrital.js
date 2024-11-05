// models/PoblacionDistrital.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PoblacionDistrital = sequelize.define('PoblacionDistrital', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Distrito: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Poblacion_Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Poblacion_Hombres: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Poblacion_Mujeres: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Area_km2: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    Densidad_Poblacional: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'PoblacionDistrital',
    timestamps: false,
});

module.exports = PoblacionDistrital;
