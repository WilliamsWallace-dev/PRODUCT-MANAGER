import { Category } from "./Category";
import { Product } from "./Product";



Category.hasMany(Product)
Product.belongsTo(Category, { foreignKey : "category_id", as : "products"})


export {
    Category,
    Product
}