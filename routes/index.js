var express = require('express');
const { createUser, signIn } = require('../services/users.service');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express' });
});

router.post('/register', async function(req, res, next) {
  try {
    const data = await createUser(req.body);
    res.json(data);
  } catch (error) {
    console.log(error);
    
    next(error)
  }
});

router.post('/login', async function(req, res, next) {
  try {
    const data = await signIn(req.body);
    res.json(data);
  } catch (error) {
    console.log(error);
    
    next(error)
  }
});

module.exports = router;
