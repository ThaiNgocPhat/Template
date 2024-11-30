import { Sequelize } from "sequelize-typescript";
import * as model from '../models/index';
import { QueryTypes } from "sequelize";

export const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'mapyeugau110418',
    database: 'project_hotel',
    port: 3306,
    logging: false,
    define:{
        timestamps: false
    },
    models:[
        model.Admin,
        model.Customer,
        model.Facilities,
        model.Hotel,
        model.Reservation,
        model.Room,
        model.Room_Status,
        model.RoomType,
        model.Servents
    ]
});

export const executeQuery  = (query: string,params?: any, queryType: QueryTypes = QueryTypes.SELECT): Promise<any> => {
    return new Promise((resolve, reject) => {
        connection.query(query, {
            type: queryType,
            replacements: params
        }).then((result:any) => {
            resolve(result);
        }).catch((err) => {
            reject(err);
        });
        }
    );
}