const express = require('express');//importa o express
const consign = require('consign');//importa o consign
const bodyParser = require('body-parser');//importa o body-parser
const expressValidator = require('express-validator');//importa o express validator

const app = express();//chama o express para a execucao
app.set('view engine','ejs');//seta qual tipo de engine o ejs vai aceitar
app.set('views','./app/views');//seta qual o nome da pasta e a rota do ejs

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended:true}));//tratamento de formularios e implementada atravez de um JSON

app.use(expressValidator());//executa o express validator

consign()
    .include('app/routes')//inclui a rota "rotas"
    .then('config/dbConnection.js')//inclui a conexao
    .then('app/models')//inclui o models
    .then('app/controllers')//inclui o controller
    .into(app);//insere no app

module.exports = app;//retorno