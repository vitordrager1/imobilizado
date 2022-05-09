const express = require('express')
const imobilizadoController = require('./controllers/imobilizadoController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/cadastrarImob', (req,res) => res.render("cadastrarImob"))
//route.get('/alterar', (req,res) => res.render("alterar") )

//pegar "variaveis" do formulario da pagina ex abaixo (/cadastrarImob  ou seja pega os dados do formulario da pagina) e envia para a rota em questao
route.post('/create-imob', imobilizadoController.cadastrar)
route.get('/consulta', imobilizadoController.pesquisar)
route.get('/alterar', imobilizadoController.alterar)



module.exports = route