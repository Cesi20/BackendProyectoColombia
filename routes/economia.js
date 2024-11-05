// routes/economia.js
const express = require('express');
const router = express.Router();
const Economia = require('../models/Economia');

router.get('/', async (req, res) => {
    try {
        const economia = await Economia.findAll();
        res.json(economia);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

module.exports = router;
