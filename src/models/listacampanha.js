'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListaCampanha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListaCampanha.belongsTo(models.Organizacao, {
        targetkey: 'id',
        as: 'campanhaId'
      })
    }
  };
  ListaCampanha.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valorMeta: DataTypes.DOUBLE,
    organizacaoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ListaCampanha',
  });
  return ListaCampanha;
};