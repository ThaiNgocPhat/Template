import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PaymentDetails = sequelize.define('PaymentDetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: DataTypes.DECIMAL,
    provider: DataTypes.STRING,
    status: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'payment_details'
});

export default PaymentDetails;
