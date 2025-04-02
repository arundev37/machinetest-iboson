var express = require('express');
const { createProduct, listProducts } = require('../services/products.service');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const data = await listProducts()
    res.json(data);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

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
