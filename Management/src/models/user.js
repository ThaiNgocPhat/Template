import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js'

const User = sequelize.define('User',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
},
{
    timestamps: true,
    tableName: 'cart_item'
}
);
export default User;