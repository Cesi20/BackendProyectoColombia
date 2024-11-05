// routes/distritos.js
const express = require('express');
const router = express.Router();
const Distritos = require('../models/Distritos');

router.get('/', async (req, res) => {
    try {
        const distritos = await Distritos.findAll();
        res.json(distritos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

module.exports = router;
