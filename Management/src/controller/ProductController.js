import sequelize from "../config/db.js";

class ProductController {
    createProduct = async (req, res) => {
        try{
            const {name, desc, SKU, category_id, inventory_id, discount_id} = req.body;
            const sql = `INSERT INTO product (name, \`desc\`, SKU, category_id, inventory_id ,discount_id) VALUES (?, ?, ?, ?, ?, ?)`;
            const result = await sequelize.query(sql, {
                replacements:[name, desc, SKU, category_id, inventory_id, discount_id]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).json({status:false, message:'Error creating product'})
        }
    }
}
export default new ProductController();