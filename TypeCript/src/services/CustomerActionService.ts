import * as model from '../models/index';
import * as config from '../config/index';
import { QueryTypes } from 'sequelize';

class CustomerActionService {
    async getCustomers(){
        const sql = `SELECT * FROM customers`;
        return await config.executeQuery(sql);
    }
    async getRoomsFacilities(){
        const sql = `SELECT * FROM rooms_facilities`;
        return await config.executeQuery(sql);
    }
    async getTopRoomsFacilities(){
        const sql = `SELECT * FROM top_rooms_facilities`;
        return await config.executeQuery(sql);
    }
    async getRoomsDetailByDate(){
        const sql = `SELECT * FROM rooms_detail_by_date`;
        return await config.executeQuery(sql);
    }
    async getRoomTypes(){
        const sql = `SELECT * FROM room_types`;
        return await config.executeQuery(sql);
    }
    async orderRevervations(){
        const sql = `INSERT INTO reservation (cus_id, booking_date, start_date, end_date, amount) VALUES (?,?,?,?,?)`;
        return await config.executeQuery(sql);
    }
    async editCustomer(id:number, customerUpdate:model.Customer){
        const data = [customerUpdate.cust_name, customerUpdate.cust_email, customerUpdate.cust_phone, customerUpdate.cust_password, id];
        const sql = `UPDATE customers SET cust_name = ?, cust_email = ?, cust_phone = ?, cust_password = ? WHERE cust_id = ?`;
        return await config.executeQuery(sql, data, QueryTypes.UPDATE);
    }
    async deleteReservation(id:number){
        const sql = `DELETE FROM reservation WHERE r_id = ?`;
        return await config.executeQuery(sql, [id], QueryTypes.DELETE);
    }
}

export default new CustomerActionService();