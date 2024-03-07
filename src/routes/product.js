const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')

// ADD PRODUCT
router.post('/products', productsController.addProduct)

// GET PRODUCTS
router.get('/products', productsController.getProducts)

// GET PRODUCT BY ID
router.get("/products/:id", productsController.getProductById);

// UPDATE PRODUCT
router.put("/products/:id", productsController.updateProduct);

// DELETE PRODUCT
router.delete("/products/:id", productsController.deleteProduct);

module.exports = router