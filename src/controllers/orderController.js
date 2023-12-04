//Order Controller

const Order = require('../models/orders');

// GET /orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.json({ message: err });
    }
};

// GET /orders/getorder/:id
const getOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ order_id: req.params.id});
        res.json(order);
    } catch (err) {
        res.json({ message: err });
    }
};

// POST /orders/addorder
const postOrder = async (req, res) => {
    const order = new Order({
        user_id: req.body.user_id,
        order_items: req.body.order_items,
    });

    try {
        var orderTotal = order.order_items.length * 1;
        console.log(orderTotal);
        order.order_total = orderTotal;
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (err) {
        res.json({ message: err });
    }
};

// PUT /orders/updateorder/:id/:status
const updateOrder = async (req, res) => {
    try {
        const order = await Order.findOne({ order_id : req.params.id });
        if (!order) {
            return res.status(400).json({ message: 'Sipariş bulunamadı!' });
        }
        order.order_status = req.params.status;
        const savedOrder = await order.save();
        res.json(savedOrder);
    } catch (err) {
        res.json({ message: err });
    }
};

// DELETE /orders/deleteorder/:id
const deleteOrder = async (req, res) => {
    try {
        const removedOrder = await Order.deleteOne({ order_id: req.params.id });
        if (removedOrder.deletedCount === 0) {
            return res.status(400).json({ message: 'Sipariş bulunamadı!' });
        }
        res.json(removedOrder);
    } catch (err) {
        res.status(500).json({ message: 'Sipariş silinirken bir hata oluştu' });
    }
};


module.exports = {
    getOrders,
    getOrder,
    postOrder,
    updateOrder,
    deleteOrder
};