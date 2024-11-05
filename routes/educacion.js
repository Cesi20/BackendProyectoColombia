// routes/educacion.js
const express = require('express');
const router = express.Router();
const Educacion = require('../models/Educacion');

router.get('/', async (req, res) => {
    try {
        const educacion = await Educacion.findAll();
        res.json(educacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

module.exports = router;
