//Product Routes

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ürünleri getiren bir endpoint örneği
router.get('/allpr', productController.getAllProducts);

// Ürün ekleme endpoint'i
router.post('/addpr', productController.addProduct);

// Tek bir ürün getiren endpoint
router.get('/:pr_id', productController.getProductById);

// Ürün silme endpoint'i
router.delete('/delpr/:pr_id', productController.delProduct);

module.exports = router;
