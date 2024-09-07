const express = require('express');
const router = express.Router();
const categoryService = require('../services/categoryService');

// Obtener todas las categorías
router.get('/', async (req, res) => {
    const categories = await categoryService.getCategories();
    res.json(categories);
});

// Crear una nueva categoría
router.post('/', async (req, res) => {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
});

// Actualizar una categoría
router.put('/:id', async (req, res) => {
    const updated = await categoryService.updateCategory(req.params.id, req.body);
    if (updated) {
        res.json({ message: 'Categoría actualizada con éxito' });
    } else {
        res.status(404).json({ error: 'Categoría no encontrada' });
    }
});

// Eliminar una categoría
router.delete('/:id', async (req, res) => {
    const deleted = await categoryService.deleteCategory(req.params.id);
    if (deleted) {
        res.json({ message: 'Categoría eliminada con éxito' });
    } else {
        res.status(404).json({ error: 'Categoría no encontrada' });
    }
});

module.exports = router;
