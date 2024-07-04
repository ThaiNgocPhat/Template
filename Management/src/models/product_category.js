import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../config/db.js';

//Basic -> Machine learning -> AI -> Algorithms ->
const ProductCategory  = sequelize.define('ProductCategory',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    create_at: DataTypes.DATE,
    modified_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
},
{
    timestamps: true,
    tableName: 'product_category'
}
)

export default ProductCategory;