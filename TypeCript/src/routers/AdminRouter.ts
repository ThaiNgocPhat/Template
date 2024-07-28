import { Router } from 'express';
import AdminController from '../controllers/AdminController';
import CustomerActionController from '../controllers/CustomerActionController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const router = Router();

router.post('/login', AdminController.adminLogin);
router.post('/register', AdminController.adminRegister);
router.get('/customer',AuthMiddleware.verifyToken, CustomerActionController.getCustomers);

export default router;