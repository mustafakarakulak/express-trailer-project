// Order Routes

const express = require('express');
const router = express.Router();
const { getOrders,
    getOrder,
    postOrder,
    updateOrder,
    deleteOrder  } = require('../controllers/orderController');


// GET /orders
router.get('/', getOrders);

// GET /orders/getorder/:id
router.get('/getorder/:id', getOrder);

// POST /orders/addorder
router.post('/addorder', postOrder);

// PUT /orders/updateorder/:id
router.put('/updateorder/:id/:status', updateOrder);

// DELETE /orders/deleteorder/:id
router.delete('/deleteorder/:id', deleteOrder);


module.exports = router;
