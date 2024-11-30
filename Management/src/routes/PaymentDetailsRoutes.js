import Router from 'express'
import PaymentDetailsController from '../controller/PaymentDetailsController.js';

const routes = Router();

routes.post('/add', PaymentDetailsController.createPaymentDetailsController);

export default routes;