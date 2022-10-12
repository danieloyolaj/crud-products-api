const { DataTypes } = require('sequelize') //This is for the type of data from the database

const db = require('../utils/database') //Importing the database configuration file

//Defining the model
const Products = db.define('products', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'is_available' //this field will save the column in the database in sneake case
    }
})

module.exports = Products