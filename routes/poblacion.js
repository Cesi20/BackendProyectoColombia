// routes/poblacion.js
const express = require('express');
const router = express.Router();
const Poblacion = require('../models/Poblacion');

router.get('/', async (req, res) => {
    try {
        const poblacion = await Poblacion.findAll();
        res.json(poblacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

module.exports = router;
