const { DataTypes } = require('sequelize')
const Sequelize = require('../config/bd.js')

const genero = Sequelize.define(
    'Genero', 
    {
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        tableName: 'generos',
        timestamps: true
        }
    )

    module.exports = {genero}