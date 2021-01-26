var express = require('express');
router = express.Router();
const dataAccess = require('../../../core/dataaccess');
const ProductModel = require('../../models/productModel');
const mongoose = require('mongoose');

router.get('/', function (req, res) {
    dataAccess.getAll(ProductModel, res);
});

router.get('/:id', function (req, res) {
    dataAccess.get(ProductModel, req.params.id, res);
});

router.post('/', async function (req, res) {
    const userObject = getModel(req, res);
    await dataAccess.insert(userObject, res);
});

router.put('/:id', function (req, res) {
    const productObject = getModel(req, res);
    const id = mongoose.Types.ObjectId(req.params.id);
    productObject._id = id;
    dataAccess.update(ProductModel, req.params.id, productObject, res);
});

router.delete('/:id', function (req, res) {
    dataAccess.delete(ProductModel, req.params.id, res);
});

function getModel(req, res) {
    if (!req) {
        res.status(400).send('Bad Request', req.body);
    }
    const productObject = new ProductModel({
        productName: req.body.productName,
        productId: req.body.productId,
        cost: req.body.cost,
        category: req.body.category,
        image: req.body.image,
        status: req.body.status,
        createdBy: req.body.createdBy,
        createdAt: req.body.createdAt
    });

    return productObject;
}

module.exports = router;
