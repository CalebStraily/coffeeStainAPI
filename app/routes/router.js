const express = require('express');
const router = express.Router();

//ex. http://localhost:4001/api/products
router.use('/products', require('./api/productroutes'));

module.exports = router;