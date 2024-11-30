import sequelize from "../config/db.js";

class PaymentDetailsController {
    createPaymentDetailsController = async (req, res) => {
        try{
            const {amount, provider, status} = req.body;
            if(!amount ||!provider ||!status){
                return res.status(400).json({status: false, message: 'Invalid payment details'})
            }
            const sql = `INSERT INTO payment_details(amount, provider, status) VALUES (?,?,?)`;
            const result = await sequelize.query(sql, {
                replacements:[amount, provider, status]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).json({status: false, message: 'Error creating payment details'})
        }
    }
}
export default new PaymentDetailsController();