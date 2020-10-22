'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Organizacao.hasMany(models.ListaCampanha)
    }
  };
  Organizacao.init({
    razaosocial: DataTypes.STRING,
    nomefantasia: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    estado: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Organizacao',
  });
  return Organizacao;
};