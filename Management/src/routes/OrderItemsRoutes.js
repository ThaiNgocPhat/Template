import Router from 'express';
import OrderItemsController from '../controller/OrderItemsController.js';

const routes = Router();

routes.post('/add', OrderItemsController.createOrderItemsController);

export default routes;