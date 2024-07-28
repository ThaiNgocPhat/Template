import Router from 'express'
import ProductController from '../controller/ProductController.js';

const routes = Router();

routes.post('/add', ProductController.createProduct);

export default routes;