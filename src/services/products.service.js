const { Op } = require('sequelize')
const Products = require('../db/models')
const { NotFoundException } = require('../tools/errors')

const getProducts = async ({title, description, price, userId}) => {
    const filter = {
        ...(title && {
            title : {
                [Op.like] : `%${title}%`
            }
        }),
        ...(description && {
            description : {
                [Op.like] : `%${description}%`
            }
        }),
        ...(price && {
            price
        }),
        ...(userId && {
            userId
        })
    }

    const data = await Products.findAll({
        where : {
            ...filter
        },
        include : {
            model : Products,
            as : 'products',
            require : false
        }
    })

    return data
}


const getProductById = async(id) => Products.findByPk(id)

const addProduct = () => {
    
}

const updateProduct = () => {

}

const deleteProduct = async(id) => {
    const product = await Products.findByPk(id)

    if(!product) throw new NotFoundException('product nor found')

    await Products.destroy(id)
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}