import sequelize  from "express";

class UserPaymentController {
    createUserPaymentController = async (req, res) => {
        try{
            const {user_id, payment_type, provider, account_no, expiry} = req.body;
            const sql = `INSERT INTO user_payment (user_id, payment_type, provider, account_no, expiry) VALUES (?,?,?,?,?)`;
            const result = await sequelize.query(sql, {
                replacements: [user_id, payment_type, provider, account_no, expiry]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).json({status: false, message: 'Error creating user payment'})
        }
    }
}

export default new UserPaymentController();