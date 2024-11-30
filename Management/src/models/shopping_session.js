import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ShoppingSession = sequelize.define('ShoppingSession', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL
}, {
    timestamps: false,
    tableName: 'shopping_session'
});

export default ShoppingSession;
