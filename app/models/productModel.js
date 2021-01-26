const mongoose = require('mongoose');
const productSchema = require('../database/schemas/productSchema');

const ProductModel = mongoose.model('Product', productSchema, "Products");

module.exports = ProductModel;