import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js'
import Product from "./product.js";
import OrderDetails from "./order_details.js";

const OrderItems = sequelize.define('OrderItems',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: DataTypes.INTEGER,
        create_at: DataTypes.DATE,
        modified_at: DataTypes.DATE,

        //TODO: foreign key
        order_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER
    },
    {
        timestamps: true,
        tableName: 'order_items'
    }
);

OrderItems.belongsTo(OrderDetails, {foreignKey: 'order_id'})
OrderItems.belongsTo(Product, {foreignKey: 'product_id'})
export default OrderItems;