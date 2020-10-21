const express = require('express'); //importando o express
const bodyParser = require('body-parser'); // usando bodyParser
const app = express(); //construtor, recebendo uma porta

app.use(bodyParser.urlencoded({ extended: true})); // as requsições do app vão utilizar os recursos do bodyParser
app.use(bodyParser.json());

const routes = require('./src/routes/usuarioRoutes.js');//recebendo e acessando o arquivo de rotas

routes(app); //neste momento, routes passa a ser uma função chamada de routes

app.route('/')
    .get((req, res) => { // criando uma rota para o app,se for no metodo get,ele vai fazer o que está no get, caso contrario, o que está posta
        res.send('API Doa Fácil!')
    });

const port = process.env.PORT || 3000; //variavel de ambiente

app.listen(port);// informando uma porta qualquer

console.log('Servidor Funcionando, na porta:', port);