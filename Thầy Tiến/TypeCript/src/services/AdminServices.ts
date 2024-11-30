import * as model from '../models/index'
import * as config from '../config/index'
import bcrypt from 'bcrypt'
import { QueryTypes } from 'sequelize';

class AdminServices {
    async adminlogin(admin:model.Admin): Promise<any>{
        try{
            if(!admin.admin_email || !admin.admin_password){
                throw new Error("Not found email or password")
            }
            const sql = `SELECT * FROM admin WHERE admin_email = `;
            const result = await config.executeQuery(sql,[admin.admin_email]);
            if(result.length > 0){
                const  admin_exist = result[0];
                const match = await bcrypt.compare(admin.admin_password,admin_exist.admin_password);
                if(match){
                    //token
                    const token = await config.generateTokenAccess(admin_exist.admin_id);
                    return {message: "Login success", token : token };
                }else{
                    throw new Error("Invalid password");
                }
            }else{
                throw new Error("User not found");
            }
        }catch(error){
            throw error;
        }
    }
    async adminRegister(admin: model.Admin): Promise<any> {
        try {
            const selectSql = `SELECT * FROM admin WHERE admin_email = ?`;
            const existingAdmins = await config.executeQuery(selectSql, [admin.admin_email]);
            if (existingAdmins.length > 0) {
                throw new Error("Email already exists");
            }
            const hashPassword = await bcrypt.hash(admin.admin_password, 10);
            const insertSql = `INSERT INTO admin(admin_name, admin_email, admin_password, hotel_id) VALUES(?, ?, ?, ?)`;
            const insertResult = await config.executeQuery(insertSql, [admin.admin_name, admin.admin_email, hashPassword, admin.hotel_id],QueryTypes.INSERT);
            return { message: "Admin registered successfully"}; 
        } catch (error) {
            throw new Error(error);
        }
    }
    
}

export default new AdminServices;