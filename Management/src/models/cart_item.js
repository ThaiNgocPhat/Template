import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js'
import Product from './product.js'
import ShoppingSession from './shopping_session.js'

const CartItem = sequelize.define('CartItem',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: DataTypes.INTEGER,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,

    session_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
},
{
    timestamps: true,
    tableName: 'cart_item'
}
);
CartItem.belongsTo(ShoppingSession, {foreignKey: 'session_id'});
CartItem.belongsTo(Product, {foreignKey: 'product_id'});
export default CartItem;