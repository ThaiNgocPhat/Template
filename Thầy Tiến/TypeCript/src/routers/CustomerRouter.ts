import { Router } from "express";
import CustomerActionController from '../controllers/CustomerActionController';

const router = Router();

router.get('/getCustomers', CustomerActionController.getCustomers);

export default router;
