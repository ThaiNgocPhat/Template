import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProductInventory = sequelize.define('ProductInventory',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: DataTypes.INTEGER
    },
    {
        timestamps: false,
        tableName: 'product_inventory',
    }
)

export default ProductInventory;