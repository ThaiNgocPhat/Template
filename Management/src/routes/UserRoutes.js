import Router from 'express'
import UserController from '../controller/UserController.js'

const routes = Router();

routes.post('/add', UserController.createUser);

export default routes;