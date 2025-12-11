const express = require('express');
const { getAllProducts, getProductById, getCategories, getAllData } = require('../controllers/products.controller');
const router = express.Router();

router.get('/categories', getCategories);
router.get('/all', getAllData);
router.get('/:id', getProductById);
router.get('/', getAllProducts);

module.exports = router;