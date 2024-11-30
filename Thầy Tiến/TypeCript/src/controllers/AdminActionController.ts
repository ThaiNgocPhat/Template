import { RequestHandler } from "express";
import AdminActionService from "../services/AdminActionService";
import * as model from "../models/index";
import * as config  from '../config/index';

class AdminActionController {
    getHotelDetails: RequestHandler = async (req, res) => {
        try{
            const results = await AdminActionService.getAllHotel();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    getRoomType: RequestHandler = async (req, res) => {
        try{
            const results = await AdminActionService.getRoomType();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    getOneReservation: RequestHandler = async (req, res) => {
        try{
            const id = Number(req.params.id);
            const results = await AdminActionService.getOneReservation(id);
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    editFacilities: RequestHandler = async (req, res) => {
        try{
            const {id} = req.params;
            const facility: model.Facilities = req.body;
            const results = await AdminActionService.editFacilities(parseInt(id), facility);
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    addRoom: RequestHandler = async (req, res) => {
        try{
            const room: model.Room = req.body;
            const results = await AdminActionService.addRoom(room);
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    addFacilities: RequestHandler = async (req, res) => {
        try{
            const facilities: model.Facilities = req.body;
            const results = await AdminActionService.addFacilities(facilities);
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    cancelReservation: RequestHandler = async (req, res) => {
        try{
            const {id} = req.params;
            const results = await AdminActionService.cancelReservation(parseInt(id));
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    
}

export default AdminActionController;