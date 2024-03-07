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

// GET PRODUCTS
router.get('/products', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// GET PRODUCT BY ID
router.get("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// UPDATE PRODUCT
router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price, stock, description } = req.body;
    productSchema
        .updateOne({ _id: id }, { $set: { name, price, stock, description } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// DELETE PRODUCT
router.put("/products/:id", (req, res) => {
    const { id } = req.params;
    productSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

module.exports = router