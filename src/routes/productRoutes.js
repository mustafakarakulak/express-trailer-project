//Product Routes

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ürünleri getiren bir endpoint örneği
router.get('/allpr', productController.getAllProducts);

// Ürün ekleme endpoint'i
router.post('/addpr', productController.addProduct);

// Örnek olarak tek bir ürün getiren endpoint
router.get('/:id', productController.getProductById);

module.exports = router;
