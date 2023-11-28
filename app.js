const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const categorieRoutes = require('./src/routes/categorieRoutes');

const app = express();
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect('mongodb+srv://admin:123@database.yx8yijv.mongodb.net/kitchen?retryWrites=true&w=majority');

// Rotaları kullanma
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/categories', categorieRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});