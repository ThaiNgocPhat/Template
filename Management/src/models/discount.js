import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Discount = sequelize.define('Discount',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        desc: DataTypes.TEXT,
        discount_percent: DataTypes.DECIMAL,
        active: DataTypes.BOOLEAN
    },
    {
        timestamps: false,
        tableName: 'discount',
    }
);

export default Discount;