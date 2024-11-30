import Router from'express';
import CartItemController from '../controller/CartItemController.js';

const routes = Router();

routes.post('/add', CartItemController.createCartItremController);

export default routes;