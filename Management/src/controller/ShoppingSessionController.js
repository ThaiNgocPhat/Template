import sequelize from '../config/db.js';

class ShoppingSessionController {
    createShoppingSessiopnController = async (req, res) => {
        try{
            const {user_id, total} = req.body;
            const sql = `INSERT INTO shopping_session (user_id, total) VALUES (?, ?)`;
            const result = await sequelize.query(sql, {
                replacements:[user_id, total]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(400).json({status:false, message: 'Error'})
        }
    }
}
export default new ShoppingSessionController();