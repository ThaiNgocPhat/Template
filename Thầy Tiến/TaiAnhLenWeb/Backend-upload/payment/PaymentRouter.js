import {Router} from 'express'
import {PaymentHandle} from './PaymentController.js'

const router = Router();

router.post('/payment', PaymentHandle);

export default router;