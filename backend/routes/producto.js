//routes for product
const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const productoController = require('../controllers/productoController');



router.post('/', productoController.crearProducto);
router.get('/', productoController.obtenerProductos);
router.put('/:id', productoController.actualizarProducto);
router.get('/:id', productoController.obtenerProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;