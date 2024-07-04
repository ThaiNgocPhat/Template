import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js';

const ProductInventory = sequelize.define('ProductInventory',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: DataTypes.INTEGER,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
},
{
    timestamps: true,
    tableName: 'product_inventory'
}
)

export default ProductInventory;