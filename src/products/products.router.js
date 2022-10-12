//Dependencies
const router = require('express').Router()
const productServices = require('./products.services')

//Route for getting all the products
router.get('/', productServices.getAllProducts) 

//Route for getting a product by id
router.get('/:id', productServices.getProductById)

//Route for posting/creating a new product
router.post('/', productServices.postProduct)

//Route for patching a product
router.patch('/:id', productServices.patchProduct)

//Route for deleting a product
router.delete('/:id', productServices.deleteProduct)

module.exports = router