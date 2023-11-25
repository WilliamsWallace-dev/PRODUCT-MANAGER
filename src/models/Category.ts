import { DataTypes, Model, Optional } from 'sequelize'
import { database } from '../../config/sequelize'

export interface Category {
  id: number
  name: string  
}

export interface CategoryCreationAttributes extends Optional<Category,'id'> {}

export interface CategoryInstance extends Model<Category, CategoryCreationAttributes>, Category {}

export const Category = database.define<CategoryInstance, Category>('categories', {
    id:{
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
        type : DataTypes.INTEGER
      },
      name : {
        allowNull : false,
        type : DataTypes.STRING,
        validate: {
          notNull: { msg: "foo is required" },
        },
      }
  })

