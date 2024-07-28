import sequelize from "../config/db.js";

class Discount {
    createDiscount = async (req, res) => {
        try{
            const { name, desc, discount_percent, active } = req.body;
            if(!name || !desc || !discount_percent || !active){
                res.status(400).json({status: true, message:'Server fail'})
            }
            const sql = `INSERT INTO discount(name, \`desc\`, discount_percent, active) VALUES (?, ?, ? , ?)`;
            const result = await sequelize.query(sql, {
                replacements:[name, desc,discount_percent,active]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).json({ status: false, message: 'Internal Server Error'});
        }
    }
}
export default new Discount();