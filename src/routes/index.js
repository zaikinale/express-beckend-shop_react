const express = require('express');
const router = express.Router();

const productsRoutes = require('./products');
const usersRoutes = require('./users');

router.use('/products', productsRoutes);
router.use('/', usersRoutes);

router.get('/hello', (req, res) => {
    res.send('Hello from main API!');
});

module.exports = router;