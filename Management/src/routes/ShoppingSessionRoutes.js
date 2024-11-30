import Router from 'express';
import ShoppingSessionController from '../controller/ShoppingSessionController.js';

const routes = Router();

routes.post('/add', ShoppingSessionController.createShoppingSessiopnController);

export default routes;