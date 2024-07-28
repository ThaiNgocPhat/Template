import bcrypt from "bcrypt";
import { dbQuery } from "../config/queryAsync.js";
import jwt from "jsonwebtoken";
class AdminController {
  adminRegister = async (req, res) => {
    try {
      const existingUser = await dbQuery(
        `SELECT * FROM admin WHERE LOWER(admin_email) = LOWER(?)`,
        [req.body.admin_email]
      );
      if (existingUser.length) {
        return res
          .status(400)
          .json({ status: false, Error: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(req.body.admin_password, 10);
      const sql = `INSERT INTO admin (hotel_id, admin_name, admin_email, admin_password) 
                        VALUES (?,?,?,?)`;
      const values = [
        req.body.hotel_id,
        req.body.admin_name,
        req.body.admin_email,
        hashedPassword,
      ];
      await dbQuery(sql, values);
      return res
        .status(200)
        .json({ status: true, message: "User registered successfully." });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ status: false, Error: "Internal Server Error" });
    }
  };

   adminLogin = async (req, res) => {
       try {
        const { admin_email, admin_password } = req.body;
        if (!admin_email || !admin_password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }
        const sql = 'SELECT * FROM admin WHERE admin_email = ?';
        const results = await dbQuery(sql, [admin_email]);
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        const admin = results[0];
        const isPasswordMatch = await bcrypt.compare(admin_password, admin.admin_password);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid password.' });
        }

        const token = jwt.sign(
            { admin_email: admin.admin_email },
            'access_token_screset_token', 
            { expiresIn: '1h' }
        );
        return res.status(200).json({ message: 'User logged in successfully.', token });
    } catch (error) {
        console.error('Error during admin login:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    }
}

export default new AdminController();
