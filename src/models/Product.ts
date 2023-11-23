import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../../config/sequelize'

export interface Product {
  id: number
  name: string
  amount: number
}

export interface ProductCreationAttributes extends Optional<Product,'id'> {}
// export interface CategoryCreationAttributes extends Optional<Category, 'id'> {}

export interface ProductInstance extends Model<Product, ProductCreationAttributes>, Product {}
// export interface ProductInstance extends Model<Product, ProductCreationAttributes>, Product {}

export const Product = database.define<ProductInstance, Product>('products', {
    id : {
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
        type : DataTypes.INTEGER
      },
      name : {
        allowNull : false,
        unique : true,
        type : DataTypes.STRING
      },
      amount : {
        type : DataTypes.INTEGER,
        allowNull : false,
      },
  })

