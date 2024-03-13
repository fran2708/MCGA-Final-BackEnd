const productSchema = require('../models/Product')

// GET PRODUCTS
const getProducts = async (req, res) => {
    try{
        const response = await productSchema.find()
        return res.status(200).json({
            data: response,
            error: false,
            msg: 'List of products'
        })
    }catch(error){
        return res.status(400).json({
            error: true,
            msg: error
        })
    }
}

// GET PRODUCT BY ID
const getProductById = async (req,res) => {
    try{
        const response = await productSchema.findOne({ id: req.params.id })

        if(!response){
            return res.status(404).json({
                error: true,
                msg: 'Product not found'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: `Found product: ${response.name}`
        })
    }catch(err){
        return res.status(400).json({
            error: true,
            msg: err
        })
    }
}

// ADD PRODUCT
const addProduct = async (req,res) => {
    try{
        const product = new productSchema(req.body)
        const newProduct = await product.save()
        return res.status(201).json({
            data: newProduct,
            error: false,
            msg: 'Product added'
        })
    }catch(err){
        return res.status(400).json({
            error: true,
            msg: err
        })
    }
}

// UPDATE PRODUCT
const updateProduct = async (req,res) => {
    try{
        const response = await productSchema.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if(!response){
            return res.status(400).json({
                error: true,
                msg: 'Could not update product'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Product updated'
        })
    }catch(err){
        return res.status(400).json({
            error: true,
            msg: err
        })
    }
}

// DELETE PRODUCT
const deleteProduct = async (req,res) => {
    try{
        const response = await productSchema.deleteOne({_id: req.params.id})

        if(!response){
            return res.status(404).json({
                error: true,
                msg: 'Could not delete product'
            })
        }

        return res.status(200).json({
            data: response,
            error: false,
            msg: 'Product deleted',
            id: req.params.id
        })
    }catch(err){
        return res.status(400).json({
            error: true,
            msg: err
        })
    }
}

module.exports = { getProducts, getProductById, addProduct, updateProduct, deleteProduct }