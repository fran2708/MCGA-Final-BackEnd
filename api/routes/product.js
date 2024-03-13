const express = require('express')
const router = express.Router()
const productsController = require('../controllers/products')
const { tokenAuthenticator } = require('../middlewares/tokenAuth')

// ADD PRODUCT
router.post('/products', tokenAuthenticator, productsController.addProduct)

// GET PRODUCTS
router.get('/products', productsController.getProducts)

// GET PRODUCT BY ID
router.get("/products/:id", productsController.getProductById);

// UPDATE PRODUCT
router.put("/products/:id", tokenAuthenticator, productsController.updateProduct);

// DELETE PRODUCT
router.delete("/products/:id", tokenAuthenticator, productsController.deleteProduct);

module.exports = router