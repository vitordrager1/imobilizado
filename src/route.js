const express = require('express')
const imobilizadoController = require('./controllers/imobilizadoController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/register-imob', (req,res) => res.render("register-imob"))

//route.get('/alterar', (req,res) => res.render("alterar") )

//pegar "variaveis" do formulario da pagina ex abaixo (/cadastrarImob  ou seja pega os dados do formulario da pagina) e envia para a rota em questao
route.post('/create-imob', imobilizadoController.create)
route.get('/list-imob', imobilizadoController.list)
route.get('/alter-imob/:imob', imobilizadoController.alter)
route.post('/update-imob/:imob', imobilizadoController.update)



module.exports = route