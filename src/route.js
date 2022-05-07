const express = require('express')
const imobilizadoController = require('./controllers/imobilizadoController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/cadastrarImob', (req,res) => res.render("cadastrarImob"))
route.get('/consulta', (req,res) => res.render("consulta"))

//pegar "variaveis" do formulario da pagina ex abaixo (/cadastrarImob  ou seja pega os dados do formulario da pagina) e envia para a rota em questao
route.post('/create-imob', imobilizadoController.cadastrar)

module.exports = route