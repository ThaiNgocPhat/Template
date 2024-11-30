import sequelize from "../config/db.js";

class CartItemController {
    createCartItremController = async (req, res) => {
        try {
            const {session_id, product_id} = req.body;
            const sql = `INSERT INTO cart_item (session_id, product_id) VALUES (?, ?)`;
            const result = await sequelize.query(sql, {
                replacements:[session_id, product_id]
            });
            res.status(200).json({status: true, data: result});
        } catch (error) {
            res.status(400).json({status: false, message:'Error'})
        }
    }
}
export default new CartItemController();