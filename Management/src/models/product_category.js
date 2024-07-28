import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

// Basic -> Machine learning - AI - Algorithms -> 
const ProductCategory = sequelize.define('ProductCategory',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        desc: DataTypes.TEXT
    },
    {
        timestamps: false,
        tableName: 'product_category'
    }
)

export default ProductCategory;