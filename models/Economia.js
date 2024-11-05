// models/Economia.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Distritos = require('./Distritos');

const Economia = sequelize.define('Economia', {
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
    actividad_economica: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hombres: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    mujeres: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.VIRTUAL,
        get() {
            return this.hombres + this.mujeres;
        },
        set(value) {
            throw new Error('Do not try to set the `total` value!');
        }
    }
}, {
    tableName: 'Economia',
    timestamps: false,
});

module.exports = Economia;
