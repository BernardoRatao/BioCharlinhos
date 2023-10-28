const express = require('express')
const {PORT} = require('./variaveis_shared/environment')

const ExampleRouteLoader = require('./routes/example.router.loader')
const ProdutoRouteLoader = require('./routes/produto.router.loader')
const PlacaEletronicaRouteLoader = require('./routes/placaEletronica.router.loader')
const app = new express()

app.use(express.json())

app.listen(PORT, aoLigarServidor)
 
function aoLigarServidor() {
    console.log(`SERVIDOR LIGADO NA PORTA ${PORT}`)
}

ExampleRouteLoader.load(app)
ProdutoRouteLoader.load(app)
PlacaEletronicaRouteLoader.load(app)