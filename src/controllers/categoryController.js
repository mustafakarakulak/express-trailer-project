// Category Controller

const Category = require('../models/categories');

const getCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        res.json(categories);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

const getCategory = async (req, res) => {

    const {name} = req.params;
    try{
        const category = await Category.findOne({ct_name: name});
        res.json(category);
        return category;
    }
    catch(err){
        res.status(404).json({ message: err.message });
    }
}

const addCategory = async (req, res) => {
    const category = new Category({
        ct_name: req.body.ct_name,
        ct_description: req.body.ct_description
    });

    try{
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
}

const updateCategory = async (req, res) => {
    try{
        const category = await Category.findById(req.params.id);
        if(req.body.ct_name != null){
            category.ct_name = req.body.ct_name;
        }
        if(req.body.ct_description != null){
            category.ct_description = req.body.ct_description;
        }
        const updatedCategory = await category.save();
        res.json(updatedCategory);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
}

const deleteCategory = async (req, res) => {
    try{
        await Category.findByIdAndDelete(req.params.id);
        res.json({ message: "Category deleted" });
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory
};