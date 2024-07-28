import Router from 'express';
import UserAddressController from '../controller/UserAddressController.js';

const routes = Router();

routes.post('/add', UserAddressController.createUserAddressController);

export default routes;