import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    desc: DataTypes.TEXT,
    SKU: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    inventory_id: DataTypes.INTEGER,
    discount_id: DataTypes.INTEGER
}, {
    timestamps: false,
    tableName: 'product',
});

export default Product;