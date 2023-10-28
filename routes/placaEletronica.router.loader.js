const {SERVER_URL} = require('../variaveis_shared/environment')
const PlacaEletronicaController = require('../controller/placaEletronica.controller')

class PlacaEletronicaRouteLoader {

    static load(server) {
        const ENTITY_NAME = 'placa/'
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', PlacaEletronicaController.cadastrar)
    }

}

module.exports = PlacaEletronicaRouteLoader