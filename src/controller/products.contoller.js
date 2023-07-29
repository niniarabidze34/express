const productServices = require('../services/products.service')
const { NotFoundException } = require('../tools/errors')


const getProducts = (req, res) => {
    const result = productServices.getProducts()

    return res.json(result)
}

const getProductsById = (req, res) => {
    const {productId} = req.body

    const product = productServices.getProductById(+productId)

    return res.json(product)
}

const addProducts = (req, res) => {
    const product = req.body

    productServices.addProduct(product)

    return res.sendStatus(201)
}

const updateProducts = (req, res) =>{
    const {productId} = req.params
    const payload = req.body

    const product = productServices.getProductById(productId)

    if(!product) throw new NotFoundException('PRODUCT_WITH_GIVEN_ID_DOES_NOT_EXIST')

    productServices.updateProduct(productId, payload)

    return res.json({
        message : 'UPDATED'
    })
}

const deleteProducts = (req, res) => {
    const {productId} = req.params;

    const product = productServices.getProductById(productId)

    if(!product) throw new ('PRODUCT_WITH_GIVEN_ID_DOES_NOT_EXIST')

    productServices.deleteProduct(productId)

    return res.json({
        message : 'DELETED'
    })
} 

module.exports = {
    getProducts,
    getProductsById,
    addProducts,
    updateProducts,
    deleteProducts
}