import Router from 'express'
import UserPaymentController from '../controller/UserPaymentController.js'

const routes = Router();

routes.post('/add', UserPaymentController.createUserPaymentController);

export default routes;