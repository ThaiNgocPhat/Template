import { RequestHandler } from "express";
import CustomerActionService from '../services/CustomerActionService';
import * as model from '../models/index';
import * as config from '../config/index'

class CustomerActionController {
    getCustomers: RequestHandler = async (req, res) => {
        try{
            const results = await CustomerActionService.getCustomers();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }

    getRoomsFacilities:RequestHandler =  async (req, res) => {
        try{
            const results = await CustomerActionService.getCustomers();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    getTopRoomsFacilities: RequestHandler = async (req, res) => {
        try{
            const results = await CustomerActionService.getTopRoomsFacilities();
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    getRoomsDetailByDate: RequestHandler = async (req, res) => {
        try{
            const results = await CustomerActionService.getRoomsDetailByDate();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    getRoomTypes: RequestHandler = async (req, res) => {
        try{
            const results = await CustomerActionService.getRoomTypes();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    orderRevervations: RequestHandler = async (req, res) => {
        try{
            const reservation:model.Reservation = req.body;
            const results = await CustomerActionService.orderRevervations();
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    editCustomer: RequestHandler = async (req, res) => {
        try{
            const id = Number(req.params.id);
            const customerUpdate:model.Customer = req.body;
            const results = await CustomerActionService.editCustomer(id, customerUpdate);
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
    deleteReservation: RequestHandler = async (req, res) => {
        try{
            const id = Number(req.params.id);
            const results = await CustomerActionService.deleteReservation(id);
            config.sendResponseSuccess(res, results);
        }catch(error){
            config.sendResponseServerError(res, error);
        }
    }
}
export default new CustomerActionController();


