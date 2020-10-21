'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Organizacaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      razaosocial: {
        type: Sequelize.STRING
      },
      nomefantasia: {
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      bairro: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Organizacaos');
  }
};