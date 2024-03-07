const express = require('express')
const router = express.Router()
const productSchema = require('../models/Product')

// ADD PRODUCT
router.post('/products', (req, res) => {
    const product = productSchema(req.body)
    product
        .save(product)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = router