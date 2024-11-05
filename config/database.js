require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    dialectOptions: {
        options: {
            encrypt: true, // Usa esto si tienes encriptación habilitada en tu base de datos
        }
    },
    logging: false // Desactiva el registro de SQL en la consola
});

module.exports = sequelize;
