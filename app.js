require('dotenv').config();

const cors = require('cors'); // CORS paketini ekleyin
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/productRoutes');
const userRoutes = require('./src/routes/userRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const categorieRoutes = require('./src/routes/categorieRoutes');
const cardRoutes = require('./src/routes/cardRoutes');
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// CORS middleware'ini kullanın
app.use(cors({
  origin: 'http://localhost:3000', // İzin verilen kök URL
  credentials: true // Kimlik bilgisi göndermek için true
}));

app.use(express.json());

// MongoDB bağlantısı
mongoose.connect(MONGO_URI);

// Rotaları kullanma
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categorieRoutes);
app.use('/orders', orderRoutes);
app.use('/cards', cardRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});