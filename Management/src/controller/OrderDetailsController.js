import sequelize from '../config/db.js';

class OrderDetails {
    createOrderDetails = async (req, res) => {
        try{
            const {user_id, total, payment_id} = req.body;
        const sql = ` INSERT INTO order_details (user_id, total, payment_id) VALUES (?, ?, ?)`;
        const result = await sequelize.query(sql, {
            replacements:[user_id, total, payment_id]
        });
        res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).json({status:false, message:'Error creating order'})
        }
    }
}
export default new OrderDetails();