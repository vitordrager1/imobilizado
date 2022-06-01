const express = require('express')
const imobilizadoController = require('./controllers/imobilizadoController')
const userController = require('./controllers/userController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/register-imob', (req,res) => res.render("register-imob"))
route.get('/register-user', (req,res) => res.render("register-user"))

//route.get('/alterar', (req,res) => res.render("alterar") )

//pegar "variaveis" do formulario da pagina ex abaixo (/cadastrarImob  ou seja pega os dados do formulario da pagina) e envia para a rota em questao
//IMOB GET-POST
route.post('/create-imob', imobilizadoController.create)
route.get('/list-imob', imobilizadoController.list)
route.get('/alter-imob/:imob', imobilizadoController.alter)
route.post('/update-imob/:imob', imobilizadoController.update)


//USER GET-POST
route.post('/login-user',userController.login)
route.post('/create-user', userController.create)



module.exports = route