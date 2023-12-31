// Product Controller

const Product = require('../models/products');
const Category = require('../models/categories');

//Tüm ürünleri getiren controller
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ürün ekleme controller
const addProduct = async (req, res) => {
  try {
      const category = await Category.findOne({ ct_name: req.body.pr_category });
      
      if (!category) {
          return res.status(400).json({ message: 'Kategori bulunamadı!' });
      }
      const product = new Product({
          pr_name: req.body.pr_name,
          pr_stock: req.body.pr_stock,
          pr_category: category // Kategoriyi doğrudan burada atıyorum
      });

      const newProduct = await product.save();
      res.status(201).json(newProduct);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
};

// Tek bir ürün getiren controller
const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({ pr_id: req.params.pr_id});
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    }

const delProduct = async (req, res) => {
      try {
          const productId = req.params.pr_id;
          const product = await Product.findOneAndDelete({ pr_id: productId });
          if (!product) {
              return res.status(404).json({ message: 'Ürün bulunamadı!' });
          }
          res.json({ message: 'Ürün silindi!', deletedProduct: product });
      } catch (err) {
          res.status(500).json({ message: err.message });
      }
  }  

module.exports = {
    getAllProducts,
    addProduct,
    getProductById,
    delProduct
};
