import { Router } from 'express';
import AdminRouter from './AdminRouter';


const router = Router();

export default (): Router => {
    router.use('/admin', AdminRouter);
    return router;
}