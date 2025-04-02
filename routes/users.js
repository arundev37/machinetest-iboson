var express = require('express');
const { createUser } = require('../services/users.service');
var router = express.Router();

/* GET users listing. */
router.post('/', async function(req, res, next) {
  try {
    const message = await createUser(req.body);
    res.json({message});
  } catch (error) {
    console.log(error);
    
    next(error)
  }
});

module.exports = router;
