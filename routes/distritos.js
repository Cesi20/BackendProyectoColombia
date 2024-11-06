// routes/distritos.js
const express = require('express');
const router = express.Router();
const Distritos = require('../models/Distritos');

// Ruta para obtener la población total por distrito
router.get('/poblacion-total', async (req, res) => {
    try {
        const distritos = await Distritos.findAll({
            attributes: ['nombre', 'poblacion_total']
        });
        res.json(distritos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la población total por distrito' });
    }
});

module.exports = router;
