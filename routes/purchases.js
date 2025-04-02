var express = require('express');
const { createPurchase, listPurchases } = require('../services/purchases.service');
var router = express.Router();

router.post('/', async function(req, res, next) {
  try {
    const data = await createPurchase({ ...req.body, userId: req.auth.id })
    res.json(data);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

router.get('/', async function(req, res, next) {
  try {
    const data = await listPurchases({ userId: req.auth.id })
    res.json(data);
  } catch (error) {
    console.log(error);
    next(error)
  }
});

module.exports = router;
