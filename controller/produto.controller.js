const ProdutoRepository = require('../repository/produto.repository')

class ProdutoController {
 

    cadastrar = async (requisicao, resposta) => {
     

            const body = requisicao.body
 
            if (!body.nome) {
                throw new Error('PRODUTO DEVE TER UM NOME')
            }

            if (!body.preco) {
                throw new Error('PRODUTO DEVE TER UM PRECO')
            }

            if (!body.codigoDeBarras) {
                throw new Error('PRODUTO DEVE TER UM CÓDIGO DE BARRAS')
            } 
    
            return resposta.status(200).json(await ProdutoRepository.cadastrar(body))
       
        
     }
 
}

module.exports = new ProdutoController()