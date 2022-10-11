//Dependencies
const express = require('express')

//Files
const { port } = require('./config')

//Initial configs
const app = express()

//Receiving data in json format
app.use(express.json())

//Using the routes files
app.use('/', productRouter)

//Default petition
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server Ok!',
        products: `localhost:${port}/api/v1/products/`
    })
})

//Listen to port
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})