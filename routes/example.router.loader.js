const {SERVER_URL} = require('../variaveis_shared/environment')
const ExemploController = require('../controller/exemplo.controller')

class ExampleRouteLoader {

    static load(server) {
        const ENTITY_NAME = 'exemplo/'
        server.get(SERVER_URL + ENTITY_NAME + 'consultar', ExemploController.listar)
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', ExemploController.cadastrar)
        server.put(SERVER_URL + ENTITY_NAME + 'atualizar', ExemploController.atualizar)
    }

}

module.exports = ExampleRouteLoader