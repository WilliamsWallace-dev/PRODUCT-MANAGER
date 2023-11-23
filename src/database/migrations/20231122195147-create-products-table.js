'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products',{
      id : {
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
        type : Sequelize.DataTypes.INTEGER
      },
      name : {
        allowNull : false,
        unique : true,
        type : Sequelize.DataTypes.STRING
      },
      amount : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
      },
      created_at : {
        allowNull : false,
        type : Sequelize.DataTypes.DATE
      },
      updated_at : {
        allowNull : false,
        type : Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products')
  }
};
