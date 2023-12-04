// Product model

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  pr_id: { type: String, default: uuidv4 }, // id alanını varsayılan olarak UUID'ye ayarla
  pr_name: String,
  pr_stock: String,
  pr_category: Object,
  pr_image: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
