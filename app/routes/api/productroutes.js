const daoClass = require('../../dao/productsdao');

const dao = new daoClass();

const express = require('express');
const router = express.Router();

//ex http://localhost:4001/api/products
router.get('/', (req, res) => {
    dao.findAll(req, res);
})

module.exports = router;