
const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
    Usuario.findAll().then(usuarios => {
        res.send(usuarios)
    }).catch(error => {
        
    })
}

exports.createOne = (req, res) => { // tratando as informações vinds do body
    const {nome, sobrenome, cpf, cep, logradouro, complemento, numero, bairro, estado, email, senha} = req.body
    Usuario.create({nome, sobrenome, cpf, cep, logradouro, complemento, numero, bairro, estado, email, senha}).then(usuario => {
        res.send(usuario)
    }).catch(error => {
        res.send(error)
    })
}