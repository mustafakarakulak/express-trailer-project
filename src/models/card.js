// Card models

const mongoose = require('mongoose');
const uuid = require('uuid');

const cardSchema = new mongoose.Schema({
    user_id: String,
    card_id: { type: String, default: uuid.v4 },
    card_date: { type: Date, default: Date.now },
    card_pr: [{
        pr_id: String,
        pr_name: String,
        pr_image: String,
    }]
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;