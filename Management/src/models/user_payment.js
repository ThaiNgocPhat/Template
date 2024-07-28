import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserPayment = sequelize.define('UserPayment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    payment_type: DataTypes.STRING,
    provider: DataTypes.STRING,
    account_no: DataTypes.STRING,
    expiry: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'user_payment'
});

export default UserPayment;
