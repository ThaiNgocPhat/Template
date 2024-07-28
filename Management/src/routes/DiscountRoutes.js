import Router from 'express'
import DiscountController from '../controller/DiscountController.js';

const routes = Router();

routes.post('/add', DiscountController.createDiscount);

export default routes;