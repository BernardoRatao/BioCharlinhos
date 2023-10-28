const PlacaEletronicaRepository = require('../repository/placaEletronica.repository')

class PlacaEletronicaController {
 

    cadastrar = async (requisicao, resposta) => {
     

            const body = requisicao.body
 
            if (!body.nome) {
                throw new Error('PLACA DEVE TER UM NOME')
            }

            if (!body.preco) {
                throw new Error('PLACA DEVE TER UM PRECO')
            }

            if (!body.codigo) {
                throw new Error('PLACA DEVE TER UM CÓDIGO')
            } 
    
            return resposta.status(200).json(await PlacaEletronicaRepository.cadastrar(body))
       
        
     }
 
}

module.exports = new PlacaEletronicaController()