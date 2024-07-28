import Router from 'express'
import ProductInventoryController from '../controller/ProductInventoryController.js';

const routes = Router();

routes.post('/add', ProductInventoryController.createProductInventory);

export default routes;