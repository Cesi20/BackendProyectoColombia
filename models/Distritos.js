// models/Distritos.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Distritos = sequelize.define('Distritos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    superficie: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
    },
    poblacion_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ano_censo: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'Distritos',
    timestamps: false,
});

module.exports = Distritos;
