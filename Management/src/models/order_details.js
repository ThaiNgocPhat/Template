import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js'
import UserId from './user.js'
import PaymentDetails from './payment_details.js'

const OrderDetails = sequelize.define('OrderDetails',
{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: DataTypes.DECIMAL,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,

    //TODO: foreign key
    user_id: DataTypes.INTEGER,
    payment_id: DataTypes.INTEGER
},
{
    timestamps: true,
    tableName: 'order_details'
}
);
//TODO: relationship
OrderDetails.belongsTo(UserId, {foreignKey: 'user_id'});
OrderDetails.belongsTo(PaymentDetails, {foreignKey: 'payment_id'});

export default OrderDetails;