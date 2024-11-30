import Router from 'express'
import ProductInventory from '../controller/ProductInventoryController.js';

const routes = Router();

routes.post('/add', ProductInventory.createProductInventory);

export default routes;