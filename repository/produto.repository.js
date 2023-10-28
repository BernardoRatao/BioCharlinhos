const {Produtos} = require('../scripts_banco_de_dados/models')

class ProdutoRepository {

    cadastrar = async (objetoComDadosDeCadastro) => {
        /* objetoComDadosDeCadastro = {
          nome: 'nomeProjeto',
          autor: Sr2050,
        }*/
        return await Produtos.create(objetoComDadosDeCadastro)
    } 

}

module.exports = new ProdutoRepository()