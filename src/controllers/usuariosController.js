
exports.listAll = (req, res) => {
    // criando um mockap
    let usuarios = [ // criando um array de usuarios
        {
            nome: 'teste 01',
            email: 'teste01@email.com'
        },
        {
            nome: 'teste 02',
            email: 'teste02@email.com'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Usuário criado com sucesso!',
        data: req.body
    }
    res.send(response)
}