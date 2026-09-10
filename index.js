const sequelize = require('../config/bd');
const Jogo = require('./jogo.model');
const desenvolvedoras = require('./desenvolvedoras.model');
const genero = require('./genero.model');

desenvolvedoras.BelongsToMany( Jogo, {
    through: 'creditos',
    foreignKey: 'devID',
    as: 'jogo'
})

Jogo.BelongsToMany( devs, {
    through: 'creditos',
    foreignKey: 'JogoID',
    as: 'dev'
})

genero.HasMany(Jogo, {
    foreignKey: 'generoID',
    as: 'genero'
})

Jogo.BelongsTo( genero, {
    foreignKey: 'JogoID',
    as: 'jogo'
})
