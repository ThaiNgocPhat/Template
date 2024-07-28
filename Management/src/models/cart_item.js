import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const CartItem = sequelize.define('CartItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    session_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
}, {
    timestamps: false,
    tableName: 'cart_item'
});

export default CartItem;
