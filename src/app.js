//Dependencies
const express = require('express')
const db = require('./utils/database')
const initModels = require('./models/initModels')
const config = require('./config')
const productRouter = require('./products/products.router')

//Initial configs
const app = express()

//Authenticates if the credentials for the database are correct
db.authenticate()
    .then(() => {console.log('Successfully authenticated!')})
    .catch((err) => console.log(err))

//Synchronizes the models (tables) with the database
db.sync()
    .then(() => console.log('Database synced!'))
    .catch(err => console.log(err))

//Receiving data in json format
app.use(express.json())

//Using the routes files. Also using a prefix for the route
app.use('/products', productRouter)

//Default petition
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ok!',
        products: `localhost:${config.port}/api/v1/products/`
    })
})

//Listen to port
app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})