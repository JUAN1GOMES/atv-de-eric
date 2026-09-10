const { DataTypes } = require('sequelize')
const Sequelize = require('../config/bd.js')

const Jogo = Sequelize.define(
    'Jogo', 
    {
        Nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        anoDeLancamento: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, Avaliacao: {
            type: DataTypes.INTEGER,
            AllowNUll: true
        }

    }, 
    {
        tableName: 'Jogos',
        timestamps: true
        }
    )

    module.exports = {Jogo}