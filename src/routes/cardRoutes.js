// Card Routes

const express = require('express');
const router = express.Router();
const { getCards,
    getCard,
    postCard,
    deleteCard,
    addItem  } = require('../controllers/cardController');

// GET /cards
router.get('/', getCards);

// GET /cards/getcard/:id
router.get('/getcard/:id', getCard);

// POST /cards/addcard
router.post('/addcard/:id', postCard);

// POST /cards/additem/:id
router.post('/additem/:id', addItem);

// DELETE /cards/deletecard/:id
router.delete('/deletecard/:id', deleteCard);

module.exports = router;