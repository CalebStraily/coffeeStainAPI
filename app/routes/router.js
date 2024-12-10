const express = require('express');
const router = express.Router();

//ex. https://localhost:4001/items
router.use('/products', require('./api/productroutes'));

module.exports = router;