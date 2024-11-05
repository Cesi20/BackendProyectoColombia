// routes/poblaciondistrital.js
const express = require('express');
const router = express.Router();

// Importa el modelo
const PoblacionDistrital = require('../models/PoblacionDistrital');

// Define rutas, por ejemplo:
router.get('/', async (req, res) => {
    try {
        const poblaciones = await PoblacionDistrital.findAll();
        res.json(poblaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

// Exporta el enrutador
module.exports = router;
