const Router = require('express').Router();

/* V1 Routes */

const healthCheck = require('./v1/healthCheck');
const products = require('./v1/products');

Router.use('/', healthCheck);
Router.use('/api/products', products);

/* End of V1 Routes */

module.exports = Router;