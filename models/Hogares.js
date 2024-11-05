// models/Hogares.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Distritos = require('./Distritos');

const Hogares = sequelize.define('Hogares', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    distrito_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Distritos,
            key: 'id'
        }
    },
    tipo_hogar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    tableName: 'Hogares',
    timestamps: false,
});

module.exports = Hogares;
