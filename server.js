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
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida correctamente.');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(error => {
        console.error('Error al conectar o sincronizar la base de datos:', error);
    });

// Importar rutas
const distritosRoutes = require('./routes/distritos');
const poblacionRoutes = require('./routes/poblacion');
const hogaresRoutes = require('./routes/hogares');
const educacionRoutes = require('./routes/educacion');
const economiaRoutes = require('./routes/economia');

// Usar las rutas con prefijos
app.use('/distritos', distritosRoutes);
app.use('/poblacion', poblacionRoutes);
app.use('/hogares', hogaresRoutes);
app.use('/educacion', educacionRoutes);
app.use('/economia', economiaRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
