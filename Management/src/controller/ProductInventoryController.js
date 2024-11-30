import sequelize from "../config/db.js";

class ProductInventoryController {
    createProductInventory = async (req, res) => {
        try{
            const { quantity } = req.body;
            if(!quantity){
                return res.status(400).json({status: false, message:'Invalid quantity'});
            }
            const sql = `INSERT INTO product_inventory(quantity) VALUES (?)`
            const result = await sequelize.query(sql, {
                replacements:[quantity]
            });
            res.status(200).json({status: true, data: result})
        }catch(error){
            res.status(500).json({status: false, message: 'Create failed'});
        }
    }
}
export default new ProductInventoryController();