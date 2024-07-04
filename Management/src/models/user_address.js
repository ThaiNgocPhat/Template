import { Sequelize, DataTypes } from "sequelize";
import sequelize from './config/db.js';
import User from './user.js'


const UserAddress = sequelize.define('UserAddress',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    telephone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    
    
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

export default UserAddress;