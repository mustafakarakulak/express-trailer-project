// Orders models

const mongoose = require('mongoose');
const uuid = require('uuid');

const orderSchema = new mongoose.Schema({
    user_id: String,
    order_id: { type: String, default: uuid.v4 },
    order_date: { type: Date, default: Date.now },
    order_status: { type: String, default: 'Pending' },
    order_total: Number,
    order_items: [{
        pr_id: String,
        pr_name: String,
        pr_image: String,
    }]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;