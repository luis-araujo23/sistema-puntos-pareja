const express = require('express');
const router = express.Router();
const conexion = require('../db');

router.post('/register', (req, res) => {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    const sql = 'INSERT INTO usuarios (correo, contrasena) VALUES (?, ?)';
    conexion.query(sql, [correo, contrasena], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al registrar usuario' });
        }
        res.json({ message: 'Usuario registrado correctamente' });
    });
});


router.post('/login', (req, res) => {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    const sql = 'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?';
    conexion.query(sql, [correo, contrasena], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }

        if (results.length > 0) {
            console.log("login exitoso");
            res.json({ message: 'Login exitoso', usuario: results[0] });
        } else {
            res.status(401).json({ error: 'Credenciales incorrectas' });
        }
    });
});

module.exports = router;
