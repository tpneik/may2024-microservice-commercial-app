const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'credential_and_orderservice', 
    'mysqldata', 
    'mysqlpasswd', 
    {
        host: 'mysql',
        dialect: 'mysql',
        logging: false 
    })

module.exports = sequelize