// Categories Route

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Tüm kategorileri getir
router.get('/', categoryController.getCategories);

// Kategori ekle
router.post('/addct', categoryController.addCategory);

// Kategori id'sine göre getir
router.get('/:id', categoryController.getCategory);

// Kategori id'sine göre güncelle
router.put('/:id', categoryController.updateCategory);

// Kategori id'sine göre sil
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
