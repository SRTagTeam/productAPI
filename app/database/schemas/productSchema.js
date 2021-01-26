const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    productId: Number,
    cost: Number,
    category: Number,
    image: String,
    createdBy: String,
    createdAt: { type: Date, default: Date.now },
    status: String
});

module.exports = productSchema;