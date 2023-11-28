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
        type : Sequelize.DataTypes.STRING,
        validate: {
          notNull: { msg: "name is required" },
        },
      },
      amount : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false,
      },
      price : {
        type : Sequelize.DataTypes.FLOAT,
        allowNull : false,
      },
      category_id : {
          allowNull : false,
          type : Sequelize.DataTypes.INTEGER,
          references : {model : 'categories', key : 'id'},
          onUpdate : 'CASCADE',
          onDelete : 'RESTRICT'
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
