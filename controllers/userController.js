const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
});

// Actualizar un usuario
router.put('/:id', async (req, res) => {
    const updated = await userService.updateUser(req.params.id, req.body);
    if (updated) {
        res.json({ message: 'Usuario actualizado con éxito' });
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
    const deleted = await userService.deleteUser(req.params.id);
    if (deleted) {
        res.json({ message: 'Usuario eliminado con éxito' });
    } else {
        res.status(404).json({ error: 'Usuario no encontrado' });
    }
});

// Login de usuario
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await userService.authenticate(username, password);
    if (user) {
        res.json(user);
    } else {
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
});

module.exports = router;
