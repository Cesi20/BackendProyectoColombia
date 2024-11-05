// Importaciones
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database'); // Conexión a la base de datos

// Inicializa la aplicación Express
const app = express();

// Usa CORS para permitir solicitudes desde otros dominios
app.use(cors());
app.use(express.json()); // Habilita el manejo de JSON en las solicitudes

// Sincronizar la base de datos
sequelize.authenticate() // Verifica la conexión a la base de datos
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
        return sequelize.sync(); // Sincroniza el esquema de la base de datos
    })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(error => {
        console.error('Error al conectar o sincronizar la base de datos:', error);
    });

// Importar rutas
const poblacionDistritalRoutes = require('./routes/poblaciondistrital'); // Asegúrate de que este archivo exista y exporte un enrutador válido

// Usar las rutas con prefijos
app.use('/poblaciondistrital', poblacionDistritalRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
