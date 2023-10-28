const ExemploRepository = require('../repository/exemplo.repository')

class ExemploController {

    listar = async (requisicao, resposta) => {
       return resposta.status(200).json(await ExemploRepository.listar(requisicao))
    }

    cadastrar = async (requisicao, resposta) => {
        
        try {
            const body = requisicao.body
            console.log(body)
    
            if (!body.dado1 && !body.dado2) {
                throw new Error('PELO MENOS UM DOS ATRIBUTOS DEVE SER PREENCHIDO')
            }
    
            return resposta.status(200).json(await ExemploRepository.cadastrar(body))
        } catch (error) {
            return resposta.status(500).json({msg: 'aconteceu um erro ao salvar um registro'})    
        }
        
     }

     atualizar = async (requisicao, resposta) => {
        
        try {
            const body = requisicao.body
    
            if (!body.id) {
                throw new Error('O REGISTRO DEVE TER UM ID ' + body)
            }
    
            return resposta.status(200).json(await ExemploRepository.atualizar(body))
        } catch (error) {
            return resposta.status(500).json({msg: 'aconteceu um erro ao atualizar um registro'})    
        }
        
     }

}

module.exports = new ExemploController()