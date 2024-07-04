import { Sequelize, DataTypes } from "sequelize";
import sequelize from './config/db.js';
import ProductCategory from './product_category.js'
import ProductInventory from './product_inventory.js';
import Discount from './discount.js';


const Product = sequelize.define('Product',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    SKU: DataTypes.STRING,

    //TODO: foreign key
    category_id: DataTypes.INTEGER,
    inventory_id: DataTypes.INTEGER,
    discount_id: DataTypes.INTEGER,

    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
},
{
    timestamps: true,
    tableName: 'product'
}
);
//TODO: relationship
Product.belongsTo(ProductCategory, {foreignKey: 'category_id'});
Product.belongsTo(ProductInventory, {foreignKey: 'inventory_id'});
Product.belongsTo(Discount, {foreignKey: 'discount_id'});

export default Product;