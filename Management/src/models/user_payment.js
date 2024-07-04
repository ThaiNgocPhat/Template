import { Sequelize, DataTypes } from "sequelize";
import sequelize from './config/db.js';
import User from './user.js'


const UserPayment = sequelize.define('UserPayment',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    payment_type: DataTypes.STRING,
    provider: DataTypes.STRING,
    account_no: DataTypes.INTEGER,
    expiry: DataTypes.INTEGER,
    
    
    //TODO: foreign key
    user_id: DataTypes.INTEGER,

    
},
{
    timestamps: true,
    tableName: 'product'
}
);
//TODO: relationship
ShoppingSession.belongsTo(User, {foreignKey: 'user_id'});

export default UserPayment;