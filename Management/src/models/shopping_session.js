import { Sequelize, DataTypes } from "sequelize";
import sequelize from './config/db.js';
import User from './user'


const ShoppingSession = sequelize.define('ShoppingSession',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    total: DataTypes.DECIMAL,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    
    
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

export default ShoppingSession;