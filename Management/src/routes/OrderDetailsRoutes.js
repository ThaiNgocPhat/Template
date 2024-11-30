import  Router  from "express";
import OrderDetailsController from "../controller/OrderDetailsController.js";

const routes = Router();

routes.post('/add', OrderDetailsController.createOrderDetails)

export default routes;