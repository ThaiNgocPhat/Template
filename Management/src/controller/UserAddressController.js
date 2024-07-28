import sequelize from "../config/db.js";

class UserAddressController {
    createUserAddressController = async (req, res) => {
        try{
            const {user_id, address_line1, address_line2, city, postal_code, country, telephone, mobile} = req.body;
            const sql = `INSERT INTO user_address (user_id, address_line1, address_line2, city, postal_code, country, telephone, mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const result =  await sequelize.query(sql, {
                replacements:[user_id, address_line1, address_line2, city, postal_code, country, telephone, mobile]
            });
            res.status(200).json({status: true, data: result});
        }catch(error){
            res.status(500).json({status: false, message:'Error creating user address'})
        }
    }
}
export default new UserAddressController();