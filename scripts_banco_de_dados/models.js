const { Sequelize } = require('sequelize');
const {sequelize} = require('./conexao.bancodedados')


const TabelaExemplo = sequelize.define('TabelaExemplo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dado1: {
        type: Sequelize.STRING, 
    },
    dado2: {
        type: Sequelize.STRING
    }, 
}); 

const Projetos = sequelize.define('Projetos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING, 
    },
    autor: {
        type: Sequelize.FLOAT
    }, 

});


const PlacaEletronica = sequelize.define('PlacaEletronica', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING
    },
    codigo: {
        type: Sequelize.STRING
    },
    preco: {
        type: Sequelize.FLOAT
    }
})

sequelize.sync() // ESSE CARA AO USAR .sync() VAI GERAR AS TABELAS QUE VCS DECLARAREM AQUI

module.exports = {TabelaExemplo, Projetos, PlacaEletronica};