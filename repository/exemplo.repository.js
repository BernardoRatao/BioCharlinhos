const {TabelaExemplo} = require('../scripts_banco_de_dados/models')

class ExemploRepository {

    listar = async (requisicao) => {
       const params = requisicao.query
       const whereParams = {}

       if (params.dado1) {
         whereParams.dado1 = params.dado1
       }
       
       return await TabelaExemplo.findAll({where: whereParams})
    }

    cadastrar = async (objetoComDadosDeCadastro) => {
        return await TabelaExemplo.create(objetoComDadosDeCadastro)
    }

    atualizar = async (VersaoDoFrontend) => {
      console.log('vindo do frontend ' + JSON.stringify(VersaoDoFrontend))
      const VersaoDoBancoDeDados = await TabelaExemplo.findByPk(VersaoDoFrontend.id)
      console.log('vindo do sequelize ' + JSON.stringify(VersaoDoBancoDeDados))
      return await VersaoDoBancoDeDados.update(VersaoDoFrontend)
    }

}

module.exports = new ExemploRepository()