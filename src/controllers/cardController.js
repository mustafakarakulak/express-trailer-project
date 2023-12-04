// Card Controller

const Card = require('../models/card');
const Users = require('../models/users');

// GET /cards
const getCards = async (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch (err) {
        res.json({ message: err });
    }
};

// GET /cards/getcard/:id
const getCard = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        res.json(card);
    } catch (err) {
        res.json({ message: err });
    }
};

// POST /cards/addcard
const postCard = async (req, res) => {
    try {
        const User = await Users.findOne({ us_id: req.params.id });

        if (!User || !User.us_id || User.us_id.length === 0 || User.us_id === undefined)
            return res.status(400).json({ message: 'User not found' });

        const card = new Card({
            user_id: req.params.id,
            card_pr: req.body.card_pr.map(item => ({
                pr_id: item.pr_id || null,
                pr_name: item.pr_name || null,
                pr_image: item.pr_image || null,
            }))
        });

        const savedCard = await card.save();
        res.json(savedCard);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /cards/additem/:id tek ürün ekler sepete
const addItem = async (req, res) => {
    try {
        const newPr = {
            pr_id: req.body.pr_id,
            pr_name: req.body.pr_name,
            pr_image: req.body.pr_image
        };

        await Card.updateOne(
            { card_id: req.params.id },
            {
                $push: {
                    card_pr: newPr
                }
            }
        );

        const updatedCard = await Card.findOne({ card_id: req.params.id });
        res.json(updatedCard);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
};

// DELETE /cards/deletecard/:id
const deleteCard = async (req, res) => {
    try {
        const removedCard = await Card.remove({ _id: req.params.id });
        res.json(removedCard);
    } catch (err) {
        res.json({ message: err });
    }
};

module.exports = {
    getCards,
    getCard,
    postCard,
    deleteCard,
    addItem
};
