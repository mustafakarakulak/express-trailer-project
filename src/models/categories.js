// Model Categories

const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const categorySchema = new mongoose.Schema({
    ct_id: { type: String, default: uuidv4 }, // id alanını varsayılan olarak UUID'ye ayarla
    ct_name: String,
    ct_image: String,
    ct_description: String
    });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;