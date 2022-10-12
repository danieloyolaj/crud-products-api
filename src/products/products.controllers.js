//Controlls have all the queries to the database

const { UUID } = require('sequelize')
const Products = require('../models/products.model')
const uuid = require('uuid')
const { response } = require('express')

//Getting all the products
const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}

//Getting a product by id
const getProductById = async (id) => {
    const data = await Products.findOne({
        where:{
            id: id
        }
    })
    return data
}

//Creating a product
const createProduct = async (data) => {
    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        category: data.category,
        price: data.price,
        isAvailable: data.isAvailable,
    })
    return newProduct
}

//Update/Patch a product
const editProduct = async (id, data) => {
    const response = await Products.update(data, {
        where:{ id: id },
    })
    return response 
}

//Patch a product
// const patchProduct = async (id, data) => {
//     const response = await Products.patch(data, {
// 			where:{ id:id }
//     })
// }

//Put a product
// const putProduct = async (id, data) => {
//     const response = await Products.put(id, {
// 			where: {id}
// 		})
// }

//Delete a product
const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where:{ id: id }
    })
    return data
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteProduct
}