//Dependencies
const { Sequelize } = require('sequelize')
const config = require('../config')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: config.db.username,
    password: config.db.password,
    database: config.db.dbName
})

module.exports = db