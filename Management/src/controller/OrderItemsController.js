import sequelize from '../config/db.js';

class OrderItemsController {
    createOrderItemsController = async (req, res) => {
        try{
            const {order_id, product_id, quantity} = req.body;
            const sql = `INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)`;
            const result = await sequelize.query(sql, {
                replacements: [order_id, product_id, quantity]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).jsonm({status: false, message: 'Error'})
        }
    }
}
export default new OrderItemsController();