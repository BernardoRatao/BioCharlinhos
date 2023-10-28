const {PlacaEletronica} = require('../scripts_banco_de_dados/models')

class PlacaEletronicaRepository {

    cadastrar = async (objetoComDadosDeCadastro) => {
        /* objetoComDadosDeCadastro = {
          nome: 'nomePlaca',
          codigo: 'codigoDaPlaca',
          preco: 30.0
        }*/
        return await PlacaEletronica.create(objetoComDadosDeCadastro)
    } 

}

module.exports = new PlacaEletronicaRepository()