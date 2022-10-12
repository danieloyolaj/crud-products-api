const productsController = require('./products.controllers')

//Service for getting all products
const getAllProducts = (req, res) => {
	productsController.getAllProducts()
		.then(data => {
			res.status(200).json(data)
		})
		.catch(err => {
			res.status(400).json({message: err.message})
		})
}

//Service for getting a product by its ID
const getProductById = (req,res) => {
    const id = req.params.id

  productsController.getProductById(id)
		.then(data => {
			if(data){
				res.status(200).json(data)
			}else{
				res.status(404).json({message: 'Invalid ID'})
			}
		})
		.catch(err => {
			res.status(404).json({message: err.message})
		})
}

//Service for creating a product
const postProduct = (req, res) => {
	const data = req.body
	if(data.name && data.category && data.price && data.isAvailable){
		productsController.createProduct(data)
			.then(response => {
				res.status(201).json(response)
			})
			.catch(err => {
				res.status(400).json({message: err.message})
			})
	}else{
		res.status(400).json({message: 'Missing data'})
	}
}

//Service for patching a product
const patchProduct = (req, res) => {
	const id = req.params.id
	const { name, category, price, isAvailable } = req.body

	productsController.editProduct(id, {name, category, price, isAvailable})
		.then((response) => {
			if(response){
				res.status(200).json({
					message: `Product with ID: ${id} edited successfully`
				})
			}else {
				res.status(400).json({message: 'Invalid ID.'})
			}
		}) 
		.catch(error => {
			res.status(400).json({message: error.message})
		})
}

//Service for deleting a movie
const deleteProduct = (req, res) => {
	const id = req.params.id
	productsController.deleteProduct(id)
		.then((response) => {
			if(response){
				res.status(204).json()
			}else{
				res.status(400).json({message: 'ID does not exist or invalid.'})
			}
		})
		.catch(err => {
			res.status(400).json(err)
		})
}

module.exports = {
	getAllProducts,
	getProductById,
	postProduct,
	patchProduct,
	deleteProduct

}