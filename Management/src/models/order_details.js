import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderDetails = sequelize.define('OrderDetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    payment_id: DataTypes.INTEGER
}, {
    timestamps: false,
    tableName: 'order_details'
});

export default OrderDetails;
