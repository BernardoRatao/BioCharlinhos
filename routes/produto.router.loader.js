const {SERVER_URL} = require('../variaveis_shared/environment')
const ProdutoController = require('../controller/produto.controller')

class ProdutoRouteLoader {

    static load(server) {
        const ENTITY_NAME = 'produto/'
        server.post(SERVER_URL + ENTITY_NAME + 'cadastrar', ProdutoController.cadastrar)
    }

}

module.exports = ProdutoRouteLoader