const { addIncome } = require('../controllers/Income');

const router = require('express').Router();


router.post('/add-income', addIncome)


module.exports = router