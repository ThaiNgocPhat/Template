import * as model from '../models/index';
import * as config  from '../config/index';
import { QueryTypes } from 'sequelize';


class AdminActionService{
    async getAllHotel(){
        const sql = 'SELECT * FROM hotel';
        return await config.executeQuery(sql);
    }
    async getRoomType(){
        const sql = 'SELECT * FROM room_type';
        return await config.executeQuery(sql);
    }
    async getOneReservation(id:number){
        const sql = 'SELECT * FROM reservation WHERE r_id = ?';
        return await config.executeQuery(sql,[id]);
    }
    async editFacilities(id:Number,facilitiUpdate:model.Facilities){
        const data = [facilitiUpdate.facility, facilitiUpdate.facility_cost,id];
        const sql = 'UPDATE facilities SET facility = ? facility_cost = ? WHERE id = ?';
        return await config.executeQuery(sql, data, QueryTypes.UPDATE);
    }
    async addRoom(room:model.Room){
        const data = [room.room_id, room.image,room.status_id, room.hotel_id
        , room.facility_id,room.type_id]
        const sql = 'INSERT INTO room (room_id, image, status_id, hotel_id, facility_id, type_id) VALUES (?,?,?,?,?,?)';
        return await config.executeQuery(sql, data, QueryTypes.INSERT);
    }
    async addFacilities(facilities:model.Facilities){
        const data = [facilities.facility_id,facilities.facility, facilities.facility_cost];
        const sql = 'INSERT INTO facilities (facility_id, facility, facility_cost) VALUES (?,?,?)';
        return await config.executeQuery(sql, data, QueryTypes.INSERT);
    }
    async cancelReservation(id:number){
        const sql = 'DELETE FROM reservation WHERE r_id = ?';
        return await config.executeQuery(sql,[id], QueryTypes.DELETE);
    }
}

export default new AdminActionService();