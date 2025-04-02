var express = require('express');
const { createProduct } = require('../services/products.service');
var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
  try {
    const data = await createProduct(req.body)
    res.json(data);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

module.exports = router;
