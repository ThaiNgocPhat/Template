import { RequestHandler } from "express";
import AdminServices from '../services/AdminServices';
import * as config from '../config/index'
import * as model from '../models/index'

class AdminController {
    adminLogin: RequestHandler = async (req, res) => {
        try{
            const admin: model.Admin = req.body;
            const result = await AdminServices.adminlogin(admin);
            config.sendResponseSuccess(res,result);
        }catch(error){
            config.sendResponseServerError(res,error);
        }
    }
    adminRegister: RequestHandler = async (req, res) => {
        try{
            const admin: model.Admin = req.body;
            const result = await AdminServices.adminRegister(admin);
            config.sendResponseSuccess(res,result);
        }catch(error){
            config.sendResponseServerError(res,error);
        }
    }
}

export default new AdminController;