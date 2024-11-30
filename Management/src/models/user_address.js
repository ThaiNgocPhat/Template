import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserAddress = sequelize.define('UserAddress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    address_line1: DataTypes.STRING,
    address_line2: DataTypes.STRING,
    city: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    telephone: DataTypes.STRING,
    mobile: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'user_address'
});

export default UserAddress;
