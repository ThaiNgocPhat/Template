import sequelize from '../config/db.js';

class UserController {
    createUser = async(req, res) => {
        try {
            const { username, password, first_name, last_name, telephone } = req.body;
            const sql = `INSERT INTO user (username, password, first_name, last_name, telephone) VALUES (?, ? ,?, ?, ?)`;
            const result = await sequelize.query(sql, {
                replacements: [username, password, first_name, last_name, telephone]
            });
            res.status(200).json({ status: true, data: result });
        } catch (error) {
            res.status(500).json({ status: false, message: 'Create failed' })
        }
    }
}
export default new UserController();