module.exports = function (app) { //exportando essa função como modulo para ser encontrato por outro arquivo
  const usuarios = require('../controllers/usuariosController.js')
    app.route('/usuarios')
    .get(usuarios.listAll)
    .post(usuarios.createOne)
}