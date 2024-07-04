import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js'

const PaymentDetails =  sequelize.define('PaymentDetails',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    provider: DataTypes.STRING,
    status: DataTypes.STRING,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
},
{
    timestamps: true,
    tableName: 'payment_details'
}
);

export default PaymentDetails;