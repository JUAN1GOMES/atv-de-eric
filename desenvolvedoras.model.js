const { DataTypes } = require('sequelize')
const Sequelize = require('../config/bd.js')

const desenvolvedoras = Sequelize.define(
    'desenvolvedoras', 
    {
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        }, capital: {
            type: DataTypes.STRING,
            AllowNull: false
        }
    }, 
    {
        tableName: 'Desenvolvedoras',
        timestamps: true
        }
    )

    module.exports = {desenvolvedoras}