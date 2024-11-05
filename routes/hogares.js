// routes/hogares.js
const express = require('express');
const router = express.Router();
const Hogares = require('../models/Hogares');

router.get('/', async (req, res) => {
    try {
        const hogares = await Hogares.findAll();
        res.json(hogares);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

module.exports = router;
