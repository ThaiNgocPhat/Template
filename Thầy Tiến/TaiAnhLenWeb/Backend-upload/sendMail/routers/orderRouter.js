import {Router} from 'express'
import {Order} from '../controllers/orderController.js'

const router = Router();

router.post('/order', Order);

export default router;